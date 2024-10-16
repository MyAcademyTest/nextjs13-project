import { PostProductsApi } from "@/endpoints/post-products/interfaces";
import { StatusCodes, TestHandler } from "@/lib/response-handler";
import { cleanDb } from "@/lib/test-utils";
import { closeDbConnection } from "@/lib/mongodb";

const postProductsPath = "post-products";

beforeAll(async () => {
  await cleanDb();
});

describe("postProducts API", () => {
  test("It should create a product successfully", async () => {
    const { statusCode, payload } =
      await TestHandler.invokeLambda<PostProductsApi.SuccessResponse>(
        postProductsPath,
        {
          payload: {
            name: "product-name",
            description: "product-description",
            price: 100,
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.OK);
  });
  test("It should fail for no name", async () => {
    const { statusCode, payload } =
      await TestHandler.invokeLambda<PostProductsApi.SuccessResponse>(
        postProductsPath,
        {
          payload: {
            description: "product-description",
            price: 100,
          },
        },
      );
    expect(statusCode).toBe(StatusCodes.BadRequest);
    expect(payload.message).toEqual("name is a required field");
  });
  test("It should fail for no payload", async () => {
    const { statusCode, payload } =
      await TestHandler.invokeLambda<PostProductsApi.SuccessResponse>(
        postProductsPath,
      );
    expect(statusCode).toBe(StatusCodes.BadRequest);
  });
});

test("It should fail for negative price", async () => {
  const { statusCode, payload } =
    await TestHandler.invokeLambda<PostProductsApi.SuccessResponse>(
      postProductsPath,
      {
        payload: {
          name: "product-name",
          description: "product-description",
          price: -100,
        },
      },
    );
  expect(statusCode).toBe(StatusCodes.BadRequest);
  expect(payload.message).toEqual("price must be a positive number");
});

afterAll(async () => {
  await closeDbConnection();
});
