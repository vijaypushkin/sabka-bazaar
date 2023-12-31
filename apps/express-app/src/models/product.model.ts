import { ProductDatum } from "common-lib/src/types";
import { Schema, model } from "mongoose";

const ProductSchema = new Schema<ProductDatum>({
  productName: String,
  brand: String,
  description: String,
  sku: String,
  categories: [String],
  price: String,
  specialPrice: String,
  promotionText: String,
  availableQuantity: Number,
  isAvailable: Boolean,
  images: [String],
  packSize: String,
});

const Product = model("products", ProductSchema);

export default Product;
