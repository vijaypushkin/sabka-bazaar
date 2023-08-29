import { gql, useQuery } from "@apollo/client";
import { GetCategoryWithChildrenDatum } from "common-lib/types";

export const getCategoriesWithChildren = gql`
  query GetCategoriesWithChildren {
    categoriesWithChildren {
      _id
      categoryID
      name
      children {
        _id
        categoryID
        name
        children
      }
    }
  }
`;

export const useGetCategoriesWithChildren = () => {
  return useQuery<GetCategoryWithChildrenDatum>(getCategoriesWithChildren);
};
