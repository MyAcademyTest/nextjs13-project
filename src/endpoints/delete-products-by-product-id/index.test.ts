import { DeleteProductsByProductIdApi } from "@/endpoints/delete-products-by-product-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const deleteProductsByProductIdPath = "delete-products-by-product-id";

beforeAll(async () => {
  // await cleanDb();
});

describe("deleteProductsByProductId API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<DeleteProductsByProductIdApi.SuccessResponse>(deleteProductsByProductIdPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
