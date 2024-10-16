import React, { memo } from "react";
import { useProductsScene } from "./index.hooks";
import { Button, Stack, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { AddProductForm } from "@/components/AddProductForm";

type ProductsSceneProps = {};

export const ProductsScene = memo(({}: ProductsSceneProps) => {
  const { handleNewProduct, rows, columns, showAddProductForm } =
    useProductsScene();

  return (
    <Stack
      sx={{
        p: 2,
        width: "100%",
        height: "100vh",
      }}
      spacing={2}
    >
      <Stack direction="row" justifyContent="flex-end">
        <Button variant="contained" onClick={handleNewProduct}>
          {showAddProductForm ? "chiudi form nuovo" : "mostra form nuovo"}{" "}
          Prodotto
        </Button>
      </Stack>
      {showAddProductForm && <AddProductForm />}
      <DataGrid sx={{ flex: 1 }} rows={rows} columns={columns}></DataGrid>
    </Stack>
  );
});

ProductsScene.displayName = "ProductsScene";
