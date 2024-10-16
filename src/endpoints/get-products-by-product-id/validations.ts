import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { GetProductsByProductIdApi } from "./interfaces";
import { yupObjectId } from "@/lib/mongodb/mongo-dao";

const queryStringParametersValidations =
  (): YupShapeByInterface<GetProductsByProductIdApi.QueryStringParameters> => ({
    productId: yupObjectId().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
});
