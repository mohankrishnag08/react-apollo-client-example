import React from 'react';
import { Query } from 'react-apollo';
import { Layout, Spin } from 'antd';

import Repositories from './components/Repositories/Repositories.Component';
import { GET_REPOSITORIES_OF_ORGANIZATION } from './graphql/queries';
import './App.css';

const {
  Header, Content,
} = Layout;

const App = () => (
  <Layout>
    <Header>
      <h3 className="header-title">GraphQL Demo</h3>
    </Header>
    <Content>
      <Query query={GET_REPOSITORIES_OF_ORGANIZATION}>
        {({ data: { organization }, loading }) => {
          if (loading || !organization) {
            return (
              <div className="loader-container">
                <Spin />
              </div>
            );
          }

          const repositories = organization.repositories.edges.map(edge => edge.node);
          return (
            <Repositories className="repositories" repositories={repositories} />
          );
        }}
      </Query>
    </Content>
  </Layout>
);

export default App;
