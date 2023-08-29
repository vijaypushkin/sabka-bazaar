export interface ProductDatum {
  _id: string;
  productName: string;
  brand: string;
  description: string;
  sku: string;
  categories: string[];
  price: string;
  specialPrice: string;
  promotionText: string;
  availableQuantity: 20;
  isAvailable: true;
  images: string[];
  packSize: string;
}

export interface GetProductsByCategoryDatum {
  productsByCategory: ProductDatum[];
}
