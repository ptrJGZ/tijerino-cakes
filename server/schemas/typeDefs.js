const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    users: [User]
    products: [Product]
  }

  type User {
    _id: ID
    username: String!
    email: String!
    password: String!
  }

  type Product {
    _id: ID
    productName: String!
    price: String!
    description: String!
  }
`;

module.exports = typeDefs;
