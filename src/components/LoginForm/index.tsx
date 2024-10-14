import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useLoginForm } from "./index.hooks";
import { Button, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type LoginFormProps = {};

export const LoginForm = memo(({}: LoginFormProps) => {
  const { formData, triggerSubmit, submitDisabled } = useLoginForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3} sx={{ my: 3 }}>
          <FormTextField name="email" label="Email *" />
          <FormTextField name="password" label="Password *" />
          <Button variant="contained" type="submit" disabled={submitDisabled}>
            Salva
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
LoginForm.displayName = "LoginForm";
