import { PatchProductsByProductIdApi } from "@/endpoints/patch-products-by-product-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";
import { cleanDb } from "@/lib/test-utils";
import { closeDbConnection } from "@/lib/mongodb";
import { Product } from "@/models/server/Product";

const patchProductsByProductIdPath = "patch-products-by-product-id";

beforeAll(async () => {
  await cleanDb();
});

describe("patchProductsByProductId API", () => {
  test("It should patch a product", async () => {
    const product = await Product.create(
      "product-name",
      "product-desciption",
      500,
    );
    const { statusCode, payload } =
      await TestHandler.invokeLambda<PatchProductsByProductIdApi.SuccessResponse>(
        patchProductsByProductIdPath,
        {
          queryString: {
            productId: product._id.toString(),
          },
          payload: {
            description: "product-description",
            price: product.price * 2,
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.OK);
    await product.refresh();
    expect(product.description).toEqual("product-description");
    expect(product.price).toEqual(500 * 2);
    expect(product.name).toBe("product-name");
  });
});

afterAll(async () => {
  await closeDbConnection();
});
