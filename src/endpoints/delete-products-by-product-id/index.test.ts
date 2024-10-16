import { DeleteProductsByProductIdApi } from "@/endpoints/delete-products-by-product-id/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";
import { cleanDb } from "@/lib/test-utils";
import { closeDbConnection } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { Product } from "@/models/server/Product";
import productId from "@/pages/api/products/[productId]";

const deleteProductsByProductIdPath = "delete-products-by-product-id";

beforeAll(async () => {
  await cleanDb();
});

describe("deleteProductsByProductId API", () => {
  test("It should fail for product not existing", async () => {
    const { statusCode, payload } =
      await TestHandler.invokeLambda<DeleteProductsByProductIdApi.SuccessResponse>(
        deleteProductsByProductIdPath,
        {
          queryString: {
            productId: new ObjectId().toHexString(),
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.NotFound);
    expect(payload.message).toEqual("product not found");
  });
  test("It should delete the product successfully", async () => {
    const product = await Product.create(
      "product-name",
      "product-desciption",
      500,
    );
    const { statusCode, payload } =
      await TestHandler.invokeLambda<DeleteProductsByProductIdApi.SuccessResponse>(
        deleteProductsByProductIdPath,
        {
          queryString: {
            productId: product._id.toHexString(),
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.OK);
    const product2 = await Product.getById(product._id);
    expect(product2).toBeNull();
  });
});

afterAll(async () => {
  await closeDbConnection();
});
