import Product from "../models/product.model";

const getAllProducts = async () => {
  const products = await Product.find();
  console.log(products);

  return products;
};

const getProductById = async (id: string) => {
  const product = await Product.findById(id);
  console.log(product);
  return product;
};

const getProductsByCategory = async (category: string) => {
  return await Product.find({ categories: [category] });
};

const ProductService = {
  getAllProducts,
  getProductById,
  getProductsByCategory,
};

export default ProductService;
