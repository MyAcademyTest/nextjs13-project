import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useAddProductForm } from "./index.hooks";
import { Button, CircularProgress, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type AddProductFormProps = {};

export const AddProductForm = memo(({}: AddProductFormProps) => {
  const { formData, triggerSubmit, submitDisabled, isCreatingProduct } =
    useAddProductForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3}>
          <FormTextField name="name" label="Name *" />
          <FormTextField name="description" label="Description *" />
          <FormTextField
            name="price"
            label="Price *"
            type="number"
            inputProps={{ step: "0.01" }}
          />

          <Button variant="contained" type="submit" disabled={submitDisabled}>
            {isCreatingProduct ? <CircularProgress size={24} /> : "Crea"}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
AddProductForm.displayName = "AddProductForm";
