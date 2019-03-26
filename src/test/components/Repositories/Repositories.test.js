import React from "react";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Repositories from '../../../components/Repositories/Repositories.Component';
import Repository from '../../../components/Repositories/Repository.Component';
import { organization } from '../../App.data';

Enzyme.configure({ adapter: new Adapter() });

describe("Repositories", () => {
    let wrapper;
    const repos = organization.repositories.edges.map(edge => edge.node);
    beforeEach(() => {
        wrapper = shallow(<Repositories repositories={repos} />)
    });
    it('should render repository list component', () => {
        expect(wrapper.find(Repository).length).toEqual(2);
    })
});