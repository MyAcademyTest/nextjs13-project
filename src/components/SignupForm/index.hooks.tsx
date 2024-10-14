import { useMemo } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  name: yup
    .string()
    .min(3, "il nome deve avere almeno 3 caratteri")
    .max(50, "massimo 50 caratteri")
    .required("campo richiesto"),
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  privacyAccepted: yup
    .bool()
    .oneOf([true], "please accept privacy conditions")
    .required(),
  birthDate: yup.date().required(),
});

type SignupFormData = {
  name: string;
  email: string;
  password: string;
  privacyAccepted: boolean;
  birthDate: Date;
};

export const useSignupForm = () => {
  const formData = useForm<SignupFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "Default",
      email: "",
      password: "",
      privacyAccepted: true,
      birthDate: new Date(),
    },
  });
  const {
    handleSubmit,
    formState: { isValid, isSubmitted, errors },
  } = formData;
  const submitDisabled = isSubmitted && !isValid;

  console.log({ errors });

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
