import { AnyAction, combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import authReducer, { AuthState } from './auth/authReducer';

export type RootState = {
  authReducer: AuthState;
};

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

export default reducer;
