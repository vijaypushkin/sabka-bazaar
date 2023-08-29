export interface CartProductDatum {
  productId: string;
  quantity: number;
}

export interface CartDocument {
  _id: string;
  userId: string;
  products: CartProductDatum[];
}

export interface GetUserCartDatum {
  getUserCart: CartDocument;
}
