import { gql, useQuery } from "@apollo/client";
import { GetProductsByCategoryDatum } from "common-lib/types";

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

export const useGetProductsByCategory = (category: string) => {
  return useQuery<GetProductsByCategoryDatum>(getProductsByCategory, {
    variables: { category },
  });
};
