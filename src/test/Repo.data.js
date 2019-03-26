import {GET_REPO_DETAILS} from "../graphql/queries";

export const repoData = {
    "repository": {
        "id": "MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==",
        "name": "the-road-to-learn-react",
        "object": {
            "history": {
                "totalCount": 42
            }
        },
        "stargazers": {
            "totalCount": 0
        },
        "collaborators": {
            "edges": [
                {
                    "node": {
                        "id": "fddfgdfgfgdfgdfgfdg",
                        "login": "demouser",
                        "name": "Demo User"
                    }
                },
                {
                    "node": {
                        "id": "ghfghgfhfghfgh",
                        "login": "demouser1",
                        "name": "Demo User 1"
                    }
                }
            ]
        }
    }
};
export const mockWithData = [
    {
        request: {
            query: GET_REPO_DETAILS,
            variables: {
                owner: 'User1',
                name: 'the-road-to-learn-react'
            }
        },
        result: {
            data: repoData
        }
    }
];