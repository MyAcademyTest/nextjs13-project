import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProduct } from "@/models/server/Product";
import { IProductFe } from "@/models/client/ProductFe";

export interface GetProductsParams {}
export interface GetProductsResponseData {
  products: IProductFe[];
}
export default apiActionBuilder<
  GetProductsParams,
  ApiSuccessAction<GetProductsResponseData, GetProductsParams>,
  ApiFailAction<GetProductsParams>
>(
  "apis/products/get",
  (params: GetProductsParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<GetProductsParams>(
      {
        path: "/products",
        method: HttpMethod.GET,
      },
      options,
      params,
    ),
  }),
);
