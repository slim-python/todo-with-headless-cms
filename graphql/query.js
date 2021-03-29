import gql from 'graphql-tag';

export const messageQuery = gql`
query messageQuery {
    messages {
        greetings
        id
    }
}
`