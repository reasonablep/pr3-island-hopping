import { gql } from '@apollo/client';

export const QUERY_ISLANDS = gql`
  query getIslands($category: ID) {
    islands(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($islands: [IslandInput]) {
    checkout(islands: $islands) {
      session
    }
  }
`;

export const QUERY_ALL_ISLANDS = gql`
  {
    islands {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        islands {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
