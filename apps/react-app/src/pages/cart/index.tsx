import React from "react";
import { useGetCart } from "../../graphql/queries/cart.queries";
import { Box } from "@mantine/core";
import CartItem from "../../components/cart/CartItem";
import { useRemoveProductFromCart } from "../../graphql/queries/cart.mutations";

// import styles from './CartPage.module.scss';

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = () => {
  const { data } = useGetCart();
  const [removeItem] = useRemoveProductFromCart();

  return (
    <Box maw={1200} mx="auto">
      {data?.cart.products.map((item) => (
        <CartItem
          key={item.productId}
          data={item.productData}
          id={item.productId}
          quantity={item.quantity}
          onRemove={() =>
            removeItem({ variables: { productId: item.productId } })
          }
        />
      ))}
    </Box>
  );
};

export default CartPage;
