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

const getCategoryWithChildren = async () => {
  const categories = await Category.find();

  const parentCategories = categories.filter(
    (category) => category.children.length > 0
  );

  const categoryWithChildren = parentCategories.map((parent) => {
    const children = categories.filter((category) =>
      parent.children.includes(category.categoryID)
    );

    return {
      ...parent.toObject(),
      children,
    };
  });

  return categoryWithChildren;
};

const CategoryService = {
  getAllCategories,
  getCategoryById,
  getChildCategories,
  getParentCategories,
  getCategoryWithChildren,
};

export default CategoryService;
