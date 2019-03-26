import {GET_REPOSITORIES_OF_ORGANIZATION} from "../graphql/queries";

export const organization = {
    repositories: {
        edges: [
            {
                node: {
                    id: "MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==",
                    name: "the-road-to-learn-react",
                    url: "https://github.com/the-road-to-learn-react/the-road-to-learn-react",
                    viewerHasStarred: true,
                    owner: {
                        id: 'dfghdjfgkdhfikdfgf',
                        login: 'User1'
                    }
                }
            },
            {
                node: {
                    id: "MDEwOlJlcG9zaXRvcnk2MzM1Mjkdfs==",
                    name: "the-road-to-learn-react-2",
                    url: "https://github.com/the-road-to-learn-react/the-road-to-learn-react",
                    viewerHasStarred: false,
                    owner: {
                        id: 'dfghdjfgkdhfikdfgf',
                        login: 'User1'
                    }
                }
            }
        ]
    }
};
export const mockWithData = [
    {
        request: {
            query: GET_REPOSITORIES_OF_ORGANIZATION,
            variables: {}
        },
        result: {
            data: {
                organization: organization
            }
        }
    }
];
export const mockWithLoading = [
    {
        request: {
            query: GET_REPOSITORIES_OF_ORGANIZATION,
            variables: {}
        },
        result: {
            loading: true,
            data: {}
        }
    }
];
