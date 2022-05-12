import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation addProduct(
    $productName: String!
    $price: String!
    $description: String!
  ) {
    addProduct(
      productName: $productName
      price: $price
      description: $description
    ) {
      _id
      productName
      price
      description
    }
  }
`;