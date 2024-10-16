import { PostProductsApi } from "@/endpoints/post-products/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const postProductsPath = "post-products";

beforeAll(async () => {
  // await cleanDb();
});

describe("postProducts API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<PostProductsApi.SuccessResponse>(postProductsPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
