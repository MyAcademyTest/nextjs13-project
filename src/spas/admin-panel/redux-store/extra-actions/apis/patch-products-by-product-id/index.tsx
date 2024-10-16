import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";
import { IProductFe } from "@/models/client/ProductFe";

export interface PatchProductsByProductIdParams {
  productId: string;
  description: string;
  price: number;
}
export interface PatchProductsByProductIdResponseData {
  product: IProductFe;
}
export default apiActionBuilder<
  PatchProductsByProductIdParams,
  ApiSuccessAction<
    PatchProductsByProductIdResponseData,
    PatchProductsByProductIdParams
  >,
  ApiFailAction<PatchProductsByProductIdParams>
>(
  "apis/products/{productId}/patch",
  (
    params: PatchProductsByProductIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<PatchProductsByProductIdParams>(
      {
        path: `/products/${params.productId}`,
        method: HttpMethod.PATCH,
        body: {
          description: params.description,
          price: params.price,
        },
      },
      options,
      params,
    ),
  }),
);
