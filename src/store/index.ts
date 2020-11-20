import { applyMiddleware, compose, createStore } from 'redux';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';

// create a makeStore function
const makeStore: MakeStore = () => {
  const middlewares = [ReduxThunk];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  return createStore(reducer, enhancer);
};

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV === 'development',
});
