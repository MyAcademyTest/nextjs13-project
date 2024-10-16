import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { PostUsersApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<PostUsersApi.QueryStringParameters> => ({});

const payloadValidations = (): YupShapeByInterface<PostUsersApi.Payload> => ({
  name: yup.string().required(),
  email: yup.string().required(),
  age: yup.number().integer().required(),
});

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()),
});
