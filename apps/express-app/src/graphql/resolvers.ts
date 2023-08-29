import CartService from "../services/cart.service";
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
    categoriesWithChildren: CategoryService.getCategoryWithChildren,
    parentCategories: CategoryService.getParentCategories,
    childCategories: (_, args: { parentId: string }) =>
      CategoryService.getChildCategories(args.parentId),

    cart: CartService.getUserCart,
  },

  Mutation: {
    addProductToCart: CartService.addProductToCart,
    removeProductFromCart: CartService.removeProductFromCart,
    updateProductQuantityInCart: CartService.updateProductQuantityInCart,
  },
};

export default resolvers;
