import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import authReducer from './auth/authReducer';

// create your reducer
const reducer = (state, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    default: {
      const combinedReducer = combineReducers({
        authReducer,
      });
      return combinedReducer(state, action);
    }
  }
};

export type RootState = ReturnType<typeof reducer>;

export default reducer;
