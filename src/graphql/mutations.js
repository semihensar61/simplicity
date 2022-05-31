import gql from "graphql-tag";
export const LOGIN_USER = gql`
  mutation login($e: String!, $p: String!) {
    loginWithEmail(email: $e, password: $p) {
      token
    }
  }
`;
