import Product from "../models/product.model";

const getAllProducts = async (limit: number, offset: number) => {
  const products = await Product.find().limit(limit).skip(offset);
  console.log(products);

  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  console.log(product);
  return product;
};

const getProductsByCategory = async (category: string) => {
  return await Product.find({ categories: category });
};

const ProductService = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
};

export default ProductService;
