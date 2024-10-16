import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { GetProductsApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<GetProductsApi.QueryStringParameters> => ({});

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
});
