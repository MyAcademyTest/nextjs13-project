import React, { useCallback, useEffect, useMemo } from "react";
import { GridColDef } from "@mui/x-data-grid";
import { IProductFe } from "@/models/client/ProductFe";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "@/spas/admin-panel/redux-store";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

export const useProductsScene = () => {
  const dispatch = useDispatch();
  const productList: IProductFe[] = useSelector(selectors.getProductsList);
  const [showAddProductForm, setShowAddProductForm] = React.useState(false);
  const navigate = useNavigate();

  const handleDeleteProduct = useCallback(
    (productId: string) => {
      dispatch(actions.deleteProductsByProductId.request({ productId }));
    },
    [dispatch],
  );

  // can do map of list for row, not needed

  const columns = useMemo<
    GridColDef<{
      _id: string;
      name: string;
      description: string;
      price: number;
    }>[]
  >(
    () => [
      {
        field: "id",
      },
      {
        field: "name",
        flex: 1,
      },
      {
        field: "description",
        flex: 1,
      },
      {
        field: "price",
      },
      {
        field: "delete",
        headerName: "",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => handleDeleteProduct(params.row._id)}>
              <DeleteIcon></DeleteIcon>
            </IconButton>
          );
        },
      },
      {
        field: "details",
        headerName: "",
        renderCell: (params) => {
          return (
            <IconButton onClick={() => navigate(params.row._id)}>
              <VisibilityIcon></VisibilityIcon>
            </IconButton>
          );
        },
      },
    ],
    [handleDeleteProduct, navigate],
  );

  const rows = useMemo(() => {
    return productList.map((product) => ({
      ...product,
      id: product._id,
    }));
  }, [productList]);

  const handleNewProduct = useCallback(() => {
    setShowAddProductForm((prev) => !prev);
  }, []);

  useEffect(() => {
    dispatch(actions.getProducts.request({}));
  }, [dispatch]);

  return {
    handleNewProduct,
    rows,
    columns,
    showAddProductForm,
  };
};
