import gql from 'graphql-tag';

export const GET_USERS = gql`
    query getUsers {
        email
        name
    }
`

export const POST_USER = gql`
    query postUser {
        email
        password
        name
    }
`
