import CategoryService from "../services/category.service";
import ProductService from "../services/product.service";

const resolvers = {
  Query: {
    products: (_, args: { limit: number; offset: number }) =>
      ProductService.getAllProducts(args.limit, args.offset),
    product: (_, args: { id: string }) => {
      console.log(args);
      return ProductService.getProductById(args.id);
    },
    productsByCategory: (_, args: { category: string }) =>
      ProductService.getProductsByCategory(args.category),

    categories: CategoryService.getAllCategories,
    category: (_, args: { id: string }) =>
      CategoryService.getCategoryById(args.id),
    parentCategories: CategoryService.getParentCategories,
    childCategories: (_, args: { parentId: string }) =>
      CategoryService.getChildCategories(args.parentId),
  },
};

export default resolvers;
