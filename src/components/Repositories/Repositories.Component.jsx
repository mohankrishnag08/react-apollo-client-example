import React from 'react';
import {Layout, Row, Col} from 'antd';

import Repository from './Repository.Component';

const {Content} = Layout;

export default class Repositories extends React.Component {

    render() {
        const {repositories} = this.props;
        return (
            <Content style={{paddingLeft: '16px', paddingRight:'16px'}}>
                <Row gutter={16}>
                    {repositories.map((repository, index) => {
                        return (
                            <Col span={8} key={`REPO_${index}`} style={{marginTop: '16px'}}>
                                <Repository repository={repository}/>
                            </Col>
                        )
                    })}
                </Row>
            </Content>
        )
    }
}
