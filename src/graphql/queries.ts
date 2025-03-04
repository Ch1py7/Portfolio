import { gql } from '@apollo/client'

export const query = gql`
query GetApiData {
  user(login: "Ch1py7") {
    pinnedItems(first: 6) {
      totalCount
      edges {
        node {
          ... on Repository {
            id
            name
            url
            languages(first: 10) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
            description
            homepageUrl
          }
        }
      }
    }
  }
}
`
