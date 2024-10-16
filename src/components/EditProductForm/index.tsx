import React, { memo } from "react";
import { FormProvider } from "react-hook-form";
import { useEditProductForm } from "./index.hooks";
import { Button, CircularProgress, Stack } from "@mui/material";
import { FormTextField } from "@/components/_form/FormTextField";

type EditProductFormProps = {};

export const EditProductForm = memo(({}: EditProductFormProps) => {
  const { formData, triggerSubmit, submitDisabled, isUpdatingProduct } =
    useEditProductForm();

  return (
    <FormProvider {...formData}>
      <form onSubmit={triggerSubmit}>
        <Stack spacing={3} sx={{ p: 3 }}>
          <FormTextField name="description" label="Description *" />
          <FormTextField
            name="price"
            label="Price *"
            type="number"
            inputProps={{ step: "0.01" }}
          />

          <Button variant="contained" type="submit" disabled={submitDisabled}>
            {isUpdatingProduct ? <CircularProgress size={24} /> : "Modifica"}
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
});
EditProductForm.displayName = "EditProductForm";
