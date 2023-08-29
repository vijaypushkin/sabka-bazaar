import { gql, useQuery } from "@apollo/client";
import { GetUserCartDatum } from "common-lib/types";

const getCart = gql`
  query GetUserCart {
    cart {
      _id
      userId
      products {
        productId
        quantity
      }
    }
  }
`;

export const useGetCart = () => {
  return useQuery<GetUserCartDatum>(getCart);
};
