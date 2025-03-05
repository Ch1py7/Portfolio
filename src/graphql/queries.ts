import { gql } from '@apollo/client'

export const query = gql`
query GetApiData {
  user(login: "Ch1py7") {
    pinnedItems(first: 6) {
      edges {
        node {
          ... on Repository {
            id
            name
            url
            description
            createdAt
            homepageUrl
            stargazers {
              totalCount
            }
            repositoryTopics(first: 10) {
              nodes {
                topic {
                  id
                  name
                }
              }
            }
            languages(first: 10) {
              nodes {
                id
                name
                color
              }
            }
          }
        }
      }
    }
  }
}
`
