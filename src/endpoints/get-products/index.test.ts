import { GetProductsApi } from "@/endpoints/get-products/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const getProductsPath = "get-products";

beforeAll(async () => {
  // await cleanDb();
});

describe("getProducts API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<GetProductsApi.SuccessResponse>(getProductsPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
