import { gql, useMutation } from "@apollo/client";

const addProductToCart = gql`
  mutation GetProductToCart($productId: String!, $quantity: Int!) {
    addProductToCart(productId: $productId, quantity: $quantity) {
      _id
    }
  }
`;

const removeProductFromCart = gql`
  mutation RemoveProductFromCart($productId: String!) {
    removeProductFromCart(productId: $productId) {
      _id
    }
  }
`;

export const useAddProductToCart = () =>
  useMutation<{ _id: string }, { productId: string; quantity: number }>(
    addProductToCart,
    {
      refetchQueries: ["GetUserCart"],
    }
  );

export const useRemoveProductFromCart = () =>
  useMutation<{ _id: string }, { productId: string }>(removeProductFromCart, {
    refetchQueries: ["GetUserCart"],
  });
