import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse, NextApiRequest } from "next";
import { PostAdminSessionsApi } from "./interfaces";

export default async function handler(
  req: PostAdminSessionsApi.Request,
  res: NextApiResponse<PostAdminSessionsApi.EndpointResponse>,
  originalReq: NextApiRequest,
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

    const { email, password } = payload;

    //check admin credentials on DB

    originalReq.session.admin = {
      isLoggedIn: true,
      _id: "admin-id",
    };
    await originalReq.session.save();

    return ResponseHandler.json<PostAdminSessionsApi.SuccessResponse>(res, {});
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
