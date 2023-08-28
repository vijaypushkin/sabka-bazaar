import Category from "../models/category.model";

const getAllCategories = async () => {
  const categories = await Category.find();
  return categories;
};

const getParentCategories = async () => {
  const categories = await Category.find();

  return categories.filter((category) => category.children.length > 0);
};

const getCategoryById = async (id: string) => {
  const category = await Category.findOne({ categoryID: id });
  return category;
};

const getChildCategories = async (id: string) => {
  const parent = await Category.findOne({
    categoryID: id,
  });

  const children = await Category.find({
    categoryID: {
      $in: parent.children,
    },
  });

  return children;
};

const CategoryService = {
  getAllCategories,
  getCategoryById,
  getChildCategories,
  getParentCategories,
};

export default CategoryService;
