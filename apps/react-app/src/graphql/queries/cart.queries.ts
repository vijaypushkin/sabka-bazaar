import { gql, useQuery } from "@apollo/client";
import { GetUserCartDatum } from "common-lib/types";

const getCart = gql`
  query GetUserCart {
    cart {
      _id
      userId
      products {
        quantity
        productId
        productData {
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
    }
  }
`;

export const useGetCart = () => {
  return useQuery<GetUserCartDatum>(getCart);
};
