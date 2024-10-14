import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useSignupForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";
import { FormCheckbox } from "@/components/_form/FormCheckbox";
import { FormDatePicker } from "@/components/_form/FormDatePicker";
import { FormPassword } from "@/components/_form/FormPassword";

type SignupFormProps = {};

export const SignupForm = memo(({}: SignupFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useSignupForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack
          spacing={3}
          sx={{
            my: 3,
          }}
        >
          <FormTextField name="name" label="Nome *" />
          <FormTextField name="email" label="Email *" />
          <FormPassword name="password" label="Password *" />
          <FormCheckbox
            name="privacyAccepted"
            label="Check here to accept privacy conditions"
          />
          <FormDatePicker name="birthDate" label="data di nascita *" />
          <Button variant="contained" type="submit" disabled={submitDisabled}>
            Salva
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
SignupForm.displayName = "SignupForm";
