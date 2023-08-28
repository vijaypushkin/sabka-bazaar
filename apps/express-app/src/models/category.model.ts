import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  categoryID: String,
  name: String,
  children: [String],
});

const Category = model("categories", CategorySchema);

export default Category;
