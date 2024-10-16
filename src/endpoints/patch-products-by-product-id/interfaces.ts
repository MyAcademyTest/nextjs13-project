import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { ObjectId } from "mongodb";
import { IProductFe } from "@/models/client/ProductFe";

export namespace PatchProductsByProductIdApi {
  export type QueryStringParameters = {
    productId: ObjectId;
  };

  export type Payload = {
    description: string;
    price: number;
  };

  export type SuccessResponse = {
    message?: string;
    product: IProductFe;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, Payload> {}
}
