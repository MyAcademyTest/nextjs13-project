import { ErrorResponse, RequestI } from "@/lib/response-handler";

export namespace GetUsersApi {
  export type QueryStringParameters = {};

  export type SuccessResponse = {
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, null> {}
}
