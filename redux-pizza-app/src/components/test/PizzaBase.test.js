import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PizzaBase from '../PizzaBase';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import store from '../../store';

Enzyme.configure({adapter: new Adapter()});
const mockStore = configureMockStore();

// function setup() {
//     const props = {
//         store: store,
//         data: {user: {name: 'Bob'}},
//         update: jest.fn()
//     }
  
//     const enzymeWrapper = shallow(<PizzaBase {...props} />)
  
//     return {
//       props,
//       enzymeWrapper
//     }
// }

describe('Router', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            data: {user: {name: 'Bob'}},
            update: jest.fn()
        }
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <PizzaBase store={store} />
        );
    });

  test('renders self and elements', () => {
    expect(wrapper.find('h3').text()).toBe('Pizza Base');
    expect(wrapper.find('h3')).toHaveLength(1);
  });

});