import { ProductDatum } from "./products.types";

export interface CartProductDatum {
  productData: ProductDatum;
  productId: string;
  quantity: number;
}

export interface CartDocument {
  _id: string;
  userId: string;
  products: CartProductDatum[];
}

export interface GetUserCartDatum {
  cart: CartDocument;
}
