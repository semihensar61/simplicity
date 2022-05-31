import gql from "graphql-tag";

export const LOGGED_IN_USER = gql`
  query {
    me {
      e
    }
  }
`;


export const USER_ORDERS = gql `
query orders{
    pastOrders(limit:10, index:0,) {
      items {
        id
      }
    }
  }
`;