import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse, NextApiRequest } from "next";
import { DeleteUsersByUserIdApi } from "./interfaces";
import Users from "@/pages/users";

export default async function handler(
  req: DeleteUsersByUserIdApi.Request,
  res: NextApiResponse<DeleteUsersByUserIdApi.EndpointResponse>,
  originalReq: NextApiRequest,
) {
  try {
    const { validationResult, queryStringParameters } = req;

    if (!originalReq.session.admin) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: "Unauthorized" },
        StatusCodes.Unauthorized,
      );
    }

    if (!validationResult.isValid) {
      return ResponseHandler.json<ErrorResponse>(
        res,
        { message: validationResult.message! },
        StatusCodes.BadRequest,
      );
    }

    return ResponseHandler.json<DeleteUsersByUserIdApi.SuccessResponse>(
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
