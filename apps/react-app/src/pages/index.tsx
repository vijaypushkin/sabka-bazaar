import React from "react";
import { useGetProductsWithPromo } from "../graphql/queries/products.query";
import { Box, Flex, Text, Title } from "@mantine/core";
import ProductCard from "../components/products/ProductCard";
import { useGetCart } from "../graphql/queries/cart.queries";
import { Helmet } from "react-helmet";

// import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  const { data } = useGetProductsWithPromo({ limit: 20, offset: 0 });
  const { data: cartData } = useGetCart();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sabka Bazaar - Promotions</title>
      </Helmet>
      <Box mb="lg">
        <Title order={1}>Offer Zone</Title>
        <Text variant="gradient" size="lg">
          Get the up 60% deals
        </Text>
        <Text variant="gradient" size="md">
          and more at Sabka Bazaar
        </Text>
      </Box>

      <Flex
        mih={50}
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction="row"
        wrap="wrap"
      >
        {data?.productsWithPromo?.map((product) => (
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
    </>
  );
};

export default HomePage;
