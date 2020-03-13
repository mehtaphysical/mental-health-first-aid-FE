import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe.skip('App component', () => {
  it('renders App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
