import gql from 'graphql-tag'
export const LOGIN_USER = gql`
mutation login ($e: String! $p: String! ){
  login(e: $e p: $p ){
    token
  }
}
`