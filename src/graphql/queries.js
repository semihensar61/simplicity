import gql from "graphql-tag";

export const LOGGED_IN_USER = gql`
query user{
    user {
      firstName
      lastName
      email
      addresses{
        postalCode
      }
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