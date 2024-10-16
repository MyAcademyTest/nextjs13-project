import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { PatchProductsByProductIdApi } from "./interfaces";
import { Product } from "@/models/server/Product";

export default async function handler(
  req: PatchProductsByProductIdApi.Request,
  res: NextApiResponse<PatchProductsByProductIdApi.EndpointResponse>,
) {
  try {
    const { validationResult, queryStringParameters, payload } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }

    const { productId } = queryStringParameters;
    const product = await Product.getById(productId);
    if (!product) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        {
          message: "product not found",
        },
        StatusCodes.NotFound,
      );
    }

    const { description, price } = payload;
    await product.patch({
      description,
      price,
    });

    return ResponseHandler.json<PatchProductsByProductIdApi.SuccessResponse>(
      res,
      {
        product: product.toClientVersion(),
      },
    );
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
