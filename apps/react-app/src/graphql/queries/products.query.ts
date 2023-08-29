import { gql, useQuery } from "@apollo/client";
import {
  GetProductsByCategoryDatum,
  GetProductsWithPromoDatum,
} from "common-lib/types";

export const getProductsByCategory = gql`
  query ProductsByCategory($category: String!) {
    productsByCategory(category: $category) {
      _id
      productName
      brand
      description
      sku
      categories
      price
      specialPrice
      promotionText
      availableQuantity
      isAvailable
      images
      packSize
    }
  }
`;

export const getProductsWithPromo = gql`
  query GetProductsWithPromo($limit: Int!, $offset: Int!) {
    productsWithPromo(limit: $limit, offset: $offset) {
      _id
      productName
      brand
      description
      sku
      categories
      price
      specialPrice
      promotionText
      availableQuantity
      isAvailable
      images
      packSize
    }
  }
`;

export const useGetProductsByCategory = (category: string) => {
  return useQuery<GetProductsByCategoryDatum>(getProductsByCategory, {
    variables: { category },
  });
};

export const useGetProductsWithPromo = ({
  limit,
  offset,
}: {
  limit: number;
  offset: number;
}) => {
  return useQuery<GetProductsWithPromoDatum>(getProductsWithPromo, {
    variables: { limit, offset },
  });
};
