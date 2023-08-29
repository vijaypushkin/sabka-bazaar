import Cart from "../models/cart.model";
import AuthService from "./auth.service";

const getUserCart = async (parent, args, context, info) => {
  const user = AuthService.authGuard(args, context);

  const { userId } = args;
  const cart = await Cart.findOne({
    userId: user._id,
  });

  if (!cart) {
    const newCart = new Cart({
      userId,
      products: [],
    });
    await newCart.save();
    return newCart;
  }

  return cart;
};

const addProductToCart = async (parent, args, context, info) => {
  const user = AuthService.authGuard(args, context);

  const { productId, quantity } = args;
  const cart = await Cart.findOneAndUpdate(
    {
      userId: user._id,
    },
    {
      $push: {
        products: {
          productId,
          quantity,
        },
      },
    },
    {
      new: true,
      upsert: true,
    }
  );
  return cart;
};

const removeProductFromCart = async (parent, args, context, info) => {
  const user = AuthService.authGuard(args, context);

  const { productId } = args;
  const cart = await Cart.findOneAndUpdate(
    {
      userId: user._id,
    },
    {
      $pull: {
        products: {
          productId,
        },
      },
    },
    {
      new: true,
    }
  );
  return cart;
};

const updateProductQuantityInCart = async (parent, args, context, info) => {
  const user = AuthService.authGuard(args, context);

  const { productId, quantity } = args;
  const cart = await Cart.findOneAndUpdate(
    {
      userId: user._id,
      "products.productId": productId,
    },
    {
      $set: {
        "products.$.quantity": quantity,
      },
    },
    {
      new: true,
    }
  );
  return cart;
};

const CartService = {
  getUserCart,
  addProductToCart,
  removeProductFromCart,
  updateProductQuantityInCart,
};

export default CartService;
