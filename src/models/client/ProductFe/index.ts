export type IProductFe = {
  _id: string;
  name: string;
  description: string;
  price: number;
};

export class ProductFe implements IProductFe {
  _id: string;
  name: string;
  description: string;
  price: number;
}
