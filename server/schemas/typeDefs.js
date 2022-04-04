const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    isAdmin: Boolean
  }

  type Product {
    _id: ID
    productName: String
    price: String
    description: String
  }

  type Query {
    users: [User]
    products: [Product]
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      isAdmin: Boolean!
    ): User
    addProduct(
      productName: String!
      price: String!
      description: String!
    ): Product
    updateProduct(
      productId: ID!
      productName: String
      price: String
      description: String
    ): Product
    deleteProduct(productId: ID!): Product
  }
`;

module.exports = typeDefs;
