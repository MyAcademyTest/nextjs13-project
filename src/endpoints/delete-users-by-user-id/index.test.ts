import { DeleteUsersByUserIdApi } from "@/endpoints/delete-users-by-user-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";
import { closeDbConnection } from "@/lib/mongodb";
import { cleanDb } from "@/lib/test-utils";
import { User } from "@/models/server/User";
import Cookies from "cookies";
import { CookieTestHandler } from "@/lib/test-utils/session";
import adminSessions from "@/pages/api/adminSessions";
import { adminSessionOptions } from "@/lib/session";

const deleteUsersByUserIdPath = "delete-users-by-user-id";

beforeAll(async () => {
  await cleanDb();
});

describe("deleteUsersByUserId API", () => {
  test("It should fail because the user calling the Api is not an admin", async () => {
    const { statusCode, payload } =
      await TestHandler.invokeLambda<DeleteUsersByUserIdApi.SuccessResponse>(
        deleteUsersByUserIdPath,
        {
          queryString: {
            userId: "user-id",
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.Unauthorized);
    expect(payload.message).toEqual("Unauthorized");
  });
  test("It should delete the user successfully", async () => {
    const cookieSession = await CookieTestHandler.createSessionCookie(
      {
        admin: {
          isLoggedIn: true,
          id: "admin-id",
        },
      },
      adminSessionOptions,
    );

    const user = await User.create();
    const { statusCode, payload } =
      await TestHandler.invokeLambda<DeleteUsersByUserIdApi.SuccessResponse>(
        deleteUsersByUserIdPath,
        {
          queryString: {
            userId: user._id.toString(),
          },
          headers: {
            ...cookieSession,
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  await closeDbConnection();
});
