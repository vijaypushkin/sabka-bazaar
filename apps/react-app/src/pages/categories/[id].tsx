import { Flex } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../../graphql/queries/products.query";
import ProductCard from "../../components/products/ProductCard";

import { useGetCart } from "../../graphql/queries/cart.queries";

// import styles from './CategoriesIDPage.module.scss';

const CategoriesIDPage: React.FC = () => {
  const { id } = useParams();
  const { data } = useGetProductsByCategory(id ?? "");
  const { data: cartData } = useGetCart();

  return (
    <Flex
      mih={50}
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
    >
      {data?.productsByCategory?.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          quantity={
            cartData?.cart.products.find(
              (item) => item.productId === product._id
            )?.quantity
          }
        />
      ))}
    </Flex>
  );
};

export default CategoriesIDPage;
