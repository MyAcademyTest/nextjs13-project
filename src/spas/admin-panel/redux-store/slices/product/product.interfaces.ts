import { IProductFe } from "@/models/client/ProductFe";

export interface ProductState {
  list: IProductFe[];
  current: IProductFe;
}
