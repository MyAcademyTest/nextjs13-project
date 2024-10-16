import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { ObjectId } from "mongodb";
import { IProductFe } from "@/models/client/ProductFe";

export namespace GetProductsByProductIdApi {
  export type QueryStringParameters = {
    productId: ObjectId;
  };

  export type SuccessResponse = {
    message?: string;
    product: IProductFe;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, null> {}
}
