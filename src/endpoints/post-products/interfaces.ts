import { ErrorResponse, RequestI } from "@/lib/response-handler";
import { IProductFe, ProductFe } from "@/models/client/ProductFe";

export namespace PostProductsApi {
  export type QueryStringParameters = {};

  export type Payload = {
    name: string;
    description: string;
    price: number;
  };

  export type SuccessResponse = {
    product: IProductFe;
    message?: string;
  };

  export type EndpointResponse = SuccessResponse | ErrorResponse;

  export interface Request extends RequestI<QueryStringParameters, Payload> {}
}
