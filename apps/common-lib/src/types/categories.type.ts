import { BaseApi } from "./base-api.types";

export interface CategoryDatum {
  _id: string;
  categoryID: string;
  children: string[];
  name: string;
}

export interface GetCategoriesDatum {
  categories: CategoryDatum[];
}

export interface GetCategoriesResponse extends BaseApi<GetCategoriesDatum> {}

export interface GetParentCategoryDatum {
  parentCategories: CategoryDatum[];
}

export interface GetParentCategoryResponse
  extends BaseApi<GetParentCategoryDatum> {}
