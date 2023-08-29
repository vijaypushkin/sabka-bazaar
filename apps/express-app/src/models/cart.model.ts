import { Schema, model } from "mongoose";
import { CartDocument, CartProductDatum } from "common-lib/src/types";

const ProductSubSchema = new Schema<CartProductDatum>({
  productId: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    min: 1,
  },
});

const CartSchema = new Schema<CartDocument>({
  userId: {
    type: String,
    required: true,
  },
  products: [ProductSubSchema],
});

const Cart = model("carts", CartSchema);
export default Cart;
