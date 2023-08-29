const typeDef = `#graphql
  type Query {
    user: User,

    products(limit: Int!, offset: Int!): [Product],
    product(id: ID!): Product,
    productsByCategory(category: String!): [Product],
    productsWithPromo(limit: Int!, offset: Int!): [Product],

    categories: [Category],
    category(id: ID!): Category,
    categoriesWithChildren: [CategoryWithChildren],
    parentCategories: [Category],
    childCategories(parentId: ID!): [Category],

    cart: Cart,
  }

  type Mutation {
    addProductToCart(productId: String!, quantity: Int!): Cart,
    removeProductFromCart(productId: String!): Cart,
    updateProductQuantityInCart(productId: String!, quantity: Int!): Cart,
  }

  type User {
    _id: ID!,
    name: String,
    email: String,
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

  type Cart {
    _id: ID!,
    userId: String,
    products: [CartProductDatum]
  }

  type CartProductDatum {
    productId: String,
    productData: Product,
    quantity: Int,
  }
`;

export default typeDef;
