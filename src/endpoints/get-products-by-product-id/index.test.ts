import { GetProductsByProductIdApi } from "@/endpoints/get-products-by-product-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const getProductsByProductIdPath = "get-products-by-product-id";

beforeAll(async () => {
  // await cleanDb();
});

describe("getProductsByProductId API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<GetProductsByProductIdApi.SuccessResponse>(getProductsByProductIdPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
