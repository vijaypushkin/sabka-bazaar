import React from "react";
import { useGetCart } from "../../graphql/queries/cart.queries";

// import styles from './CartPage.module.scss';

interface CartPageProps {}

const CartPage: React.FC<CartPageProps> = (props) => {
  const { data } = useGetCart();
  console.log({ data });
  return <div>This is a protected route</div>;
};

export default CartPage;
