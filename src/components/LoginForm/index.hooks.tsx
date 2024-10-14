import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
});

type LoginFormData = {
  email: string;
  password: string;
};

export const useLoginForm = () => {
  const formData = useForm<LoginFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  const triggerSubmit = useMemo(
    () =>
      handleSubmit((data) => {
        console.log("Success! ", data);
      }),
    [handleSubmit],
  );

  return {
    formData,
    triggerSubmit,
    submitDisabled,
  };
};
