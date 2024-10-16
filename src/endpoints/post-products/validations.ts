import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { PostProductsApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<PostProductsApi.QueryStringParameters> => ({});

const payloadValidations =
  (): YupShapeByInterface<PostProductsApi.Payload> => ({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()),
});
