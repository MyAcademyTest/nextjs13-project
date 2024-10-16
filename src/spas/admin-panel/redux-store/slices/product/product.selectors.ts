import { RootState } from "@/spas/admin-panel/redux-store";

export const getProductsList = (state: RootState) => state?.product?.list ?? [];

export const getCurrentProduct = (state: RootState) =>
  state?.product?.current ?? null;
