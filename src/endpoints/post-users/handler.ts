import {
  ErrorResponse,
  ResponseHandler,
  StatusCodes,
} from "@/lib/response-handler";
import { NextApiResponse } from "next";
import { PostUsersApi } from "./interfaces";

export default async function handler(
  req: PostUsersApi.Request,
  res: NextApiResponse<PostUsersApi.EndpointResponse>,
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

    const { name, email, age } = payload;

    //create user in DB

    return ResponseHandler.json<PostUsersApi.SuccessResponse>(res, {});
  } catch (e) {
    console.error(e);
    return ResponseHandler.json<ErrorResponse>(
      res,
      { message: "Internal error" },
      StatusCodes.InternalServerError,
    );
  }
}
