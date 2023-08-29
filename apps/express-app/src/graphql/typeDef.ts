const typeDef = `#graphql
  type Query {
    products(limit: Int!, offset: Int!): [Product],
    product(id: ID!): Product,
    productsByCategory(category: String!): [Product],

    categories: [Category],
    category(id: ID!): Category,
    categoriesWithChildren: [CategoryWithChildren],
    parentCategories: [Category],
    childCategories(parentId: ID!): [Category],
  }

  type Product {
    _id: ID!,
    productName: String,
    brand: String,
    description: String,
    sku: String,
    categories: [String],
    price: String,
    specialPrice: String,
    promotionText: String,
    availableQuantity: Int,
    isAvailable: Boolean,
    images: [String],
    packSize: String,
  }

  type Category {
    _id: ID!,
    categoryID: String,
    name: String,
    children: [String]
  }

  type CategoryWithChildren {
    _id: ID!,
    categoryID: String,
    name: String,
    children: [Category]
  }
`;

export default typeDef;
