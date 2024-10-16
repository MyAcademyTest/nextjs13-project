import { ErrorResponse, RequestI } from "@/lib/response-handler";

export namespace PostUsersApi {
  export type QueryStringParameters = {};

  export type Payload = {
    name: string;
    email: string;
    age: number;
  };

  export type SuccessResponse = {
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, Payload> {}
}
