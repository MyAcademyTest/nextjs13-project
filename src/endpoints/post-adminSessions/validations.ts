import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { PostAdminSessionsApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<PostAdminSessionsApi.QueryStringParameters> => ({});

const payloadValidations =
  (): YupShapeByInterface<PostAdminSessionsApi.Payload> => ({
    email: yup.string().required(),
    password: yup.string().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()),
});
