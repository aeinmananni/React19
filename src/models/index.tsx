export enum Colors {
  Red = "Red",
  Green = "Green",
  Bule = "Blue",
}

export type ProductsType = {
  id: string;
  name: string;
  description: string;
  material: string;
  price: string;
  quantity: number;
  color: Colors;
};
