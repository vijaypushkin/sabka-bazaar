import { BaseApi } from "./base-api.types";

export interface CategoryDatum {
  _id: string;
  categoryID: string;
  children: string[];
  name: string;
}

export interface NestedCategoryDatum {
  _id: string;
  categoryID: string;
  children: CategoryDatum[];
  name: string;
}

export interface GetCategoryWithChildrenDatum {
  categoriesWithChildren: NestedCategoryDatum[];
}

export interface GetCategoryWithChildrenResponse
  extends BaseApi<GetCategoryWithChildrenDatum> {}

export interface GetCategoriesDatum {
  categories: CategoryDatum[];
}

export interface GetCategoriesResponse extends BaseApi<GetCategoriesDatum> {}

export interface GetParentCategoryDatum {
  parentCategories: CategoryDatum[];
}

export interface GetParentCategoryResponse
  extends BaseApi<GetParentCategoryDatum> {}
