import { PatchProductsByProductIdApi } from "@/endpoints/patch-products-by-product-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";

const patchProductsByProductIdPath = "patch-products-by-product-id";

beforeAll(async () => {
  // await cleanDb();
});

describe("patchProductsByProductId API", () => {
  test("It should ...", async () => {
    // const { statusCode, payload } = await TestHandler.invokeLambda<PatchProductsByProductIdApi.SuccessResponse>(patchProductsByProductIdPath);
    // expect(statusCode).toBe(StatusCodes.OK);
  });
});

afterAll(async () => {
  // await closeDbConnection();
});
