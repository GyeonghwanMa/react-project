import gql from 'graphql-tag';

export const GET_USERS_INIT = gql`
    query getUsersInit {
        getUsersInit {
            _id
            email
            name
        }
    }
`

export const GET_USERS = gql`
    query getUsers($lastId: String!) {
        getUsers(lastId: $lastId) {
            _id
            email
            name
        }
    }
`