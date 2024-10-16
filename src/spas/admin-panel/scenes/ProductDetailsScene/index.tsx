import React, { memo } from "react";
import { useProductDetailsScene } from "./index.hooks";
import { CircularProgress, Stack, Typography } from "@mui/material";
import { EditProductForm } from "@/components/EditProductForm";

type ProductDetailsSceneProps = {};

export const ProductDetailsScene = memo(({}: ProductDetailsSceneProps) => {
  const { product, isLoadingProduct } = useProductDetailsScene();

  if (isLoadingProduct) {
    return (
      <Typography>
        Caricamento... <CircularProgress />{" "}
      </Typography>
    );
  }

  return (
    <Stack>
      {!product && <Typography> prodotto non trovato</Typography>}
      <Typography>{product?.name}</Typography>
      <Typography>{product?.description}</Typography>
      <Typography>{product?.price}</Typography>
      {!!product && <EditProductForm />}
    </Stack>
  );
});

ProductDetailsScene.displayName = "ProductDetailsScene";
