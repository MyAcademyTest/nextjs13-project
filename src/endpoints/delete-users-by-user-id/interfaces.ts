import { ErrorResponse, RequestI } from "@/lib/response-handler";

export namespace DeleteUsersByUserIdApi {
  export type QueryStringParameters = {
    userId: string;
  };

  export type SuccessResponse = {
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, null> {}
}
