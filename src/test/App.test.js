import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MockedProvider } from 'react-apollo/test-utils';
import { Layout, Spin } from 'antd';

import App from '../App';
import { mockWithData, mockWithLoading } from './App.data';
import { AsyncTestRenderer } from '../helper/testHelper';
import Repositories from '../components/Repositories/Repositories.Component';

const { Header } = Layout;

Enzyme.configure({ adapter: new Adapter() });

let wrapper;
describe("App", () => {
    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it("should render Layout element", () => {
        expect(wrapper.find(Layout)).toHaveLength(1);
    });
    it("should render Header element", () => {
        expect(wrapper.find(Header)).toHaveLength(1);
    });
    describe("with graphql", () => {
        beforeEach(async () => {
            wrapper = await AsyncTestRenderer(
                <MockedProvider mocks={mockWithData} addTypename={false} removeTypename>
                    <App />
                </MockedProvider>
            );
        })
        it("should render repositories element", () => {
            const repositories = wrapper.root.findAllByType(Repositories);
            expect(repositories.length).toEqual(1);
        });
    });
});