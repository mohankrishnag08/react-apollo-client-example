import gql from 'graphql-tag';

export const GET_REPOSITORIES_OF_ORGANIZATION = gql`
  {
    organization(login: "the-road-to-graphql") {
      repositories(first: 20) {
        edges {
          node {
            id
            owner{
              id
              login
            }
            name
            url
            viewerHasStarred
          }
        }
      }
    }
  }
`;

export const GET_REPO_DETAILS = gql`
  query Repo($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name)  {
      id
      name
      object(expression:"master") {
          ... on Commit {
            history {
              totalCount
          }
        }
      }
      stargazers {
        totalCount
      }
      collaborators(first: 5, affiliation: ALL) {
        edges {
          node {
            id
            login
            name
          }
        }
      }
    }
  }
`;