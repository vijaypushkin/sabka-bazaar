import { CategoryDatum } from "common-lib/src/types";
import { Schema, model } from "mongoose";

const CategorySchema = new Schema<CategoryDatum>({
  categoryID: String,
  name: String,
  children: [String],
});

const Category = model("categories", CategorySchema);

export default Category;
