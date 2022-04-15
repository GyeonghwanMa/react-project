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
