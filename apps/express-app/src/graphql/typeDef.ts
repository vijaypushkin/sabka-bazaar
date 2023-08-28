const typeDef = `#graphql
  type Query {
    products: [Product]
    product(id: ID!): Product
    productsByCategory(category: String!): [Product]
  }

  type Product {
    _id: ID!
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
`;

export default typeDef;
