import {
  apiActionBuilder,
  apiRequestPayloadBuilder,
  ApiRequestPayloadBuilderOptions,
  ApiSuccessAction,
  ApiFailAction,
  HttpMethod,
} from "../api-builder";

export interface DeleteProductsByProductIdParams {
  productId: string;
}
export interface DeleteProductsByProductIdResponseData {}
export default apiActionBuilder<
  DeleteProductsByProductIdParams,
  ApiSuccessAction<
    DeleteProductsByProductIdResponseData,
    DeleteProductsByProductIdParams
  >,
  ApiFailAction<DeleteProductsByProductIdParams>
>(
  "apis/products/{productId}/delete",
  (
    params: DeleteProductsByProductIdParams,
    options?: ApiRequestPayloadBuilderOptions,
  ) => ({
    payload: apiRequestPayloadBuilder<DeleteProductsByProductIdParams>(
      {
        path: `/products/${params.productId}`,
        method: HttpMethod.DELETE,
      },
      options,
      params,
    ),
  }),
);
