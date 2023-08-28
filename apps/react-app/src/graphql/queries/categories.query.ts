import { gql, useQuery } from "@apollo/client";
import { GetParentCategoryResponse } from "common-lib/types";

export const getParentCategories = gql`
  query GetAllCategories {
    parentCategories {
      categoryID
      children
      name
    }
  }
`;

export const useGetParentCategories = () => {
  return useQuery<GetParentCategoryResponse>(getParentCategories);
};
