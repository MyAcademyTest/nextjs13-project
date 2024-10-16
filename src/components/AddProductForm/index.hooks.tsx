import { useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProductFe } from "@/models/client/ProductFe";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/admin-panel/redux-store";

const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
});

type AddProductFormData = {
  name: string;
  description: string;
  price: number;
};

export const useAddProductForm = () => {
  const dispatch = useDispatch();
  const isCreatingProduct = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.postProducts.api),
  );
  const formData = useForm<AddProductFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
    reset,
  } = formData;
  const submitDisabled = isSubmitted && !isValid && isCreatingProduct;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.postProducts.request({
            name: data.name,
            description: data.description,
            price: data.price,
          }),
        );
        reset({
          name: "",
          description: "",
          price: 0,
        });
      }),
    [handleSubmit, dispatch, reset],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
    isCreatingProduct,
  };
};
