import { YupShapeByInterface } from "@/lib/response-handler";
import * as yup from "yup";
import { PatchProductsByProductIdApi } from "./interfaces";
import { yupObjectId } from "@/lib/mongodb/mongo-dao";

const queryStringParametersValidations =
  (): YupShapeByInterface<PatchProductsByProductIdApi.QueryStringParameters> => ({
    productId: yupObjectId().required(),
  });

const payloadValidations =
  (): YupShapeByInterface<PatchProductsByProductIdApi.Payload> => ({
    description: yup.string().required(),
    price: yup.number().required(),
  });

export default () => ({
  queryStringParameters: yup.object().shape(queryStringParametersValidations()),
  payload: yup.object().shape(payloadValidations()),
});
