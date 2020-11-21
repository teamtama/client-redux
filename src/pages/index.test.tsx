import React from 'react';
import Index from './index';
import { findByTestAttr, storeFactory } from '../../test/testUtils';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { RootState } from '../store/reducers';

const setup = (initialState: RootState = { authReducer: { token: null } }) => {
  const store = storeFactory(initialState);
  const wrapper = mount(
    <Provider store={store}>
      <Index />
    </Provider>
  );
  return wrapper;
};

describe('<Index />', () => {
  let wrapper;
  beforeEach(() => {
    const initialState: RootState = {
      authReducer: {
        token: 'abcd',
      },
    };
    wrapper = setup(initialState);
  });
  test('<Index />를 제대로 랜더링 하는가?', () => {
    const component = findByTestAttr(wrapper, 'page-index-wrapper');
    expect(component.exists()).toBe(true);
  });
});
