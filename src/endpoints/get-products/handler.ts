import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { GetProductsApi } from "./interfaces";
import Products from "@/pages/api/products";
import { Product } from "@/models/server/Product";

export default async function handler(
  req: GetProductsApi.Request,
  res: NextApiResponse<GetProductsApi.EndpointResponse>,
) {
  try {
    const { validationResult } = req;

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }

    const product = await Product.getList(
      {},
      {
        limit: 0,
      },
    );

    return ResponseHandler.json<GetProductsApi.SuccessResponse>(res, {
      products: product.map((p) => p.toClientVersion()),
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
