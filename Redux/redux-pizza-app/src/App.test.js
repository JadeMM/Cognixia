import React from 'react';
import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({adapter: new Adapter()});

describe('Router', () => {
  test('renders learn react link', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  test('contains router list',()=> {
    const wrapper = shallow(<App />);
    expect(wrapper.find('li')).toHaveLength(5);
  })
});

