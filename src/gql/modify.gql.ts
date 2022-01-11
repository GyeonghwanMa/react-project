import gql from 'graphql-tag';

export const GET_USER_BY_EMAIL = gql`
    query getUserByEmail(
        $email: String!
    ) {
        getUserByEmail(
            email: $email
        ) {
            email
            password
            name
        }
    }
`
