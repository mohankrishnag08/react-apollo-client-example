import React from "react";
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {MockedProvider} from 'react-apollo/test-utils';
import {Layout, Card} from 'antd';

import Repository from '../../../components/Repositories/Repository.Component';
import {mockWithData} from '../../Repo.data';
import {AsyncTestRenderer} from '../../../helper/testHelper';

Enzyme.configure({adapter: new Adapter()});

let wrapper;
const repo = {
    id: "MDEwOlJlcG9zaXRvcnk2MzM1MjkwNw==",
    name: "the-road-to-learn-react",
    url: "https://github.com/the-road-to-learn-react/the-road-to-learn-react",
    viewerHasStarred: true,
    owner: {
        id: 'dfghdjfgkdhfikdfgf',
        login: 'User1'
    }
};
describe("Repository", () => {
    beforeEach(async () => {
        wrapper = await AsyncTestRenderer(
            <MockedProvider mocks={mockWithData} addTypename={false} removeTypename>
                <Repository repository={repo}/>
            </MockedProvider>
        );
    });
    it("should render repository card", () => {
        const card = wrapper.root.findAllByType(Card);
        expect(card.length).toEqual(1);
    });
});