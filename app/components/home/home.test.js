import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './home.container';
import Home from './home';
import Header from './../common/header/header.container';
import Main from './../home/home.container';
import Routing from 'common/routing/routing';
import {BackgroundBox, LoginButton} from './home.styles.js';
import BearFace from 'assets/bear-face.js';

describe('Home Page', () => {
  it('HomeContainer renders without crashing', () => {
    const wrapper = shallow(<HomeContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Home renders without crashing', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('HomeContainer renders Home page', () => {
    const comp = shallow(<HomeContainer />);
    expect(comp.find(Home)).toBeTruthy();
  });

  it('Home renders Header', () => {
    const comp = shallow(<Home />);
    expect(comp.find(Header)).toBeTruthy();
  });

  it('Home renders Main', () => {
    const comp = shallow(<Home />);
    expect(comp.find(Main)).toBeTruthy();
  });

  it('Home renders Routing if expandMenu is true', () => {
    const comp = shallow(<Home expandMenu={true}/>);
    expect(comp.find(Routing)).toBeTruthy();
  });

  it('Home renders login box if expandMenu is false', () => {
    const comp = shallow(<Home expandMenu={false}/>);
    expect(comp.find(BackgroundBox)).toBeTruthy();
    expect(comp.find(LoginButton)).toBeTruthy();
    expect(comp.find(BearFace)).toBeTruthy();
  });
});