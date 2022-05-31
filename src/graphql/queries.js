import gql from "graphql-tag";

export const LOGGED_IN_USER = gql`
  query user {
    user {
      firstName
      lastName
      email
      addresses {
        postalCode
      }
    }
  }
`;

export const USER_ORDERS = gql`
  query orders($limit:Int!, $index:Int!) {
    pastOrders(limit: $limit, index: $index) {
      items {
        id
        name
        description
      }
      restaurant {
        name
        uid
        deliveryType
      }
    }
  }
`;

export const RESTAURANT_QUERY = gql`
  query restaurants {
    restaurants(index: 0, limit: 10, delivery: false) {
      name
    }
  }
`;
