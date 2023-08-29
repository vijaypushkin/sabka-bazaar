import Product from "../models/product.model";

const getAllProducts = async (limit: number, offset: number) => {
  const products = await Product.find().limit(limit).skip(offset);

  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  return product;
};

const getProductsWithPromo = async (parent, args) => {
  const products = await Product.find({ promotionText: { $ne: "" } })
    .limit(args.limit)
    .skip(args.offset);
  return products;
};

const getProductsByCategory = async (category: string) => {
  return await Product.find({ categories: category });
};

const ProductService = {
  getAllProducts,
  getProductById,
  getProductsWithPromo,
  getProductsByCategory,
};

export default ProductService;
