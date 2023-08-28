import ProductService from "../services/product.service";

const resolvers = {
  Query: {
    products: ProductService.getAllProducts,
    product: (_, args: { id: string }) => {
      console.log(args);
      return ProductService.getProductById(args.id);
    },
    productsByCategory: (_, args: { category: string }) =>
      ProductService.getProductsByCategory(args.category),
  },
};

export default resolvers;
