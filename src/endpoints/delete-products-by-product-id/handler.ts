import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { DeleteProductsByProductIdApi } from "./interfaces";
import { Product } from "@/models/server/Product";

export default async function handler(
  req: DeleteProductsByProductIdApi.Request,
  res: NextApiResponse<DeleteProductsByProductIdApi.EndpointResponse>,
) {
  try {
    const { validationResult, queryStringParameters } = req;

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
        { message: "product not found" },
        StatusCodes.NotFound,
      );
    }

    await Product.delete(product._id);

    return ResponseHandler.json<DeleteProductsByProductIdApi.SuccessResponse>(
      res,
      {},
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
