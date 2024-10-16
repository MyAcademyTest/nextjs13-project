import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { ObjectID } from "bson";

export namespace DeleteProductsByProductIdApi {
  export type QueryStringParameters = {
    productId: ObjectID;
  };

  export type SuccessResponse = {
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, null> {}
}
