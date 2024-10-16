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

export interface PostProductsParams {
  name: string;
  description: string;
  price: number;
}
export interface PostProductsResponseData {
  product: IProductFe;
}
export default apiActionBuilder<
  PostProductsParams,
  ApiSuccessAction<PostProductsResponseData, PostProductsParams>,
  ApiFailAction<PostProductsParams>
>(
  "apis/products/post",
  (params: PostProductsParams, options?: ApiRequestPayloadBuilderOptions) => ({
    payload: apiRequestPayloadBuilder<PostProductsParams>(
      {
        path: "/products",
        method: HttpMethod.POST,
        body: {
          name: params.name,
          description: params.description,
          price: params.price,
        },
      },
      options,
      params,
    ),
  }),
);
