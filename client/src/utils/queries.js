import { gql } from "@apollo/client";

export const QUERY_PRODUCTS = gql`
  {
    products {
      _id
      productName
      price
      description
    }
  }
`;
