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
export const PATCH_USER = gql`
    mutation patchUser(
        $email: String!
        $password: String!
        $name: String!
    ) {
        patchUser(
            email: $email
            password: $password
            name: $name
        ) {
            email
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser(
        $email: String!
        $password: String!
    ) {
        deleteUser(
            email: $email
            password: $password
        ) {
            email
        }
    }
    `;
