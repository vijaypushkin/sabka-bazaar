import { Button, Flex } from "@mantine/core";
import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategory } from "../../graphql/queries/products.query";
import ProductCard from "../../components/products/ProductCard";

// import styles from './CategoriesIDPage.module.scss';

interface CategoriesIDPageProps {}

const CategoriesIDPage: React.FC<CategoriesIDPageProps> = (props) => {
  const { id } = useParams();
  const { data } = useGetProductsByCategory(id ?? "");

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
        <ProductCard key={product._id} product={product} />
      ))}
    </Flex>
  );
};

export default CategoriesIDPage;
