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
      uid
      orderDate
      items {
        id
        name
        description
        quantity
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
  query restaurants($limit:Int!, $index:Int!)  {
    restaurants(limit: $limit, index: $index, delivery: false) {
      name
      minOrderAmount
      open
      uid
    }
  }
`;
