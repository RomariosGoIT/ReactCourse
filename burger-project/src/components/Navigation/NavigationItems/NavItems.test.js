import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItems from './NavItems';
import NavigationItem from './NavItem/NavItem'


configure({adapter: new Adapter()});

describe('<NavigationItems />', () => {

    let wrapper;

    beforeEach(()=>{
        wrapper = shallow(<NavigationItems/>);
    });

    it('should render two <NavigationItems /> elements if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItems /> elements if authenticated', () => {
        wrapper.setProps({isAuthenticate: true});
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

});