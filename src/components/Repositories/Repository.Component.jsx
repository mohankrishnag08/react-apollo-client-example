import React from 'react';
import {Card, Icon, Spin} from 'antd';
import {Query} from 'react-apollo';

import {GET_REPO_DETAILS} from '../../graphql/queries';

const RepositoryList = ({repository}) => {
    return (
        <Query query={GET_REPO_DETAILS}
               variables={{owner: repository.owner.login, name: repository.name}}>
            {({data, loading}) => {
                if (loading) {
                    return (
                        <div className="loader-container">
                            <Spin/>
                        </div>
                    );
                }
                if (!data) return null;
                const commits = data.repository.object && data.repository.object.history ? data.repository.object.history.totalCount : 0;
                const collaborators = data.repository.collaborators && data.repository.collaborators.edges ? data.repository.collaborators.edges : [];
                return (
                    <Card title={repository.name}
                          extra={<StarWidget starCount={data.repository.stargazers.totalCount}/>}>
                        <p>
                            <Icon type="clock-circle"/> {commits} Commits
                        </p>
                        {collaborators.map((collaborator, index) =>
                            <Collaborator collaborator={collaborator} key={`COLAB_${index}`}/>)}
                    </Card>
                );
            }}
        </Query>
    )
};

const StarWidget = ({starCount}) => {
    return (
        <div>
            <Icon type="star"/> {starCount}
        </div>
    )
};

const Collaborator = ({collaborator}) => {
    return (
        <p>{collaborator.node.name}</p>
    );
};

export default RepositoryList;