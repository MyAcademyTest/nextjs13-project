import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { PostProductsApi } from "./interfaces";
import { Product } from "@/models/server/Product";

export default async function handler(
  req: PostProductsApi.Request,
  res: NextApiResponse<PostProductsApi.EndpointResponse>,
) {
  try {
    const { validationResult, payload } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }

    const { name, description, price } = payload;

    console.log({ name, description, price });

    const product = await Product.create(name, description, price);

    console.log({ product });

    return ResponseHandler.json<PostProductsApi.SuccessResponse>(res, {
      product: product.toClientVersion(),
      message: "product created successfully",
    });
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
