import AuthService from "../services/auth.service";
import CartService from "../services/cart.service";
import CategoryService from "../services/category.service";
import ProductService from "../services/product.service";

const resolvers = {
  Query: {
    user: AuthService.getUser,

    products: (_, args: { limit: number; offset: number }) =>
      ProductService.getAllProducts(args.limit, args.offset),
    product: (_, args: { id: string }) => {
      return ProductService.getProductById(args.id);
    },
    productsByCategory: (_, args: { category: string }) =>
      ProductService.getProductsByCategory(args.category),
    productsWithPromo: ProductService.getProductsWithPromo,

    categories: CategoryService.getAllCategories,
    category: (_, args: { id: string }) =>
      CategoryService.getCategoryById(args.id),
    categoriesWithChildren: CategoryService.getCategoryWithChildren,
    parentCategories: CategoryService.getParentCategories,
    childCategories: (_, args: { parentId: string }) =>
      CategoryService.getChildCategories(args.parentId),

    cart: CartService.getUserCart,
  },

  CartProductDatum: {
    productData: (parent, args) =>
      ProductService.getProductById(parent.productId),
  },

  Mutation: {
    addProductToCart: CartService.addProductToCart,
    removeProductFromCart: CartService.removeProductFromCart,
    updateProductQuantityInCart: CartService.updateProductQuantityInCart,
  },
};

export default resolvers;
