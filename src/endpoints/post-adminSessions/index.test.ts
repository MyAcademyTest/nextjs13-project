import { PostAdminSessionsApi } from "@/endpoints/post-adminSessions/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const postAdminSessionsPath = "post-adminSessions";

beforeAll(async () => {
  // await cleanDb();
});

describe("postAdminSessions API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<PostAdminSessionsApi.SuccessResponse>(postAdminSessionsPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
