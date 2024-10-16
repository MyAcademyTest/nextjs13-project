import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { DeleteUsersByUserIdApi } from "./interfaces";

const queryStringParametersValidations =
  (): YupShapeByInterface<DeleteUsersByUserIdApi.QueryStringParameters> => ({
    userId: yup.string().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
});
