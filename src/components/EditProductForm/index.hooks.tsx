import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/admin-panel/redux-store";

const schema = yup.object({
  description: yup.string().required(),
  price: yup.number().required(),
});

type EditProductFormData = {
  description: string;
  price: number;
};

export const useEditProductForm = () => {
  const dispatch = useDispatch();
  const product = useSelector(selectors.getCurrentProduct);
  const formData = useForm<EditProductFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      description: product.description ?? "",
      price: product.price ?? 0,
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
    reset,
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const isUpdatingProduct = useSelector(
    selectors.getAjaxIsLoadingByApi(actions.patchProductsByProductId.api),
  );

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        dispatch(
          actions.patchProductsByProductId.request({
            productId: product?._id,
            description: data.description,
            price: data.price,
          }),
        );
      }),
    [product, handleSubmit, dispatch],
  );

  useEffect(() => {
    reset({
      description: product.description ?? "",
      price: product.price ?? 0,
    });
  }, [product, reset]);

  return {
    formData,
    triggerSubmit,
    submitDisabled,
    isUpdatingProduct,
  };
};
