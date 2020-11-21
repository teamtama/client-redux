import configureMockStore from 'redux-mock-store';
import { middlewares } from '../src/store';
import { RootState } from '../src/store/reducers';

const mockStore = configureMockStore(middlewares);

export const storeFactory = (initialState: RootState) => {
  return mockStore(initialState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};
