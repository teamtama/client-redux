import produce from 'immer';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

export interface LoginAction {
  type: typeof LOGIN;
  token: string;
}

export interface LogoutAction {
  type: typeof LOGOUT;
}

export interface AuthState {
  token: string;
  test: number;
}

const initialState: AuthState = {
  token: null,
  test: 1,
};

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOGIN:
        draft.token = action.token;
        break;
      case LOGOUT:
        draft.token = null;
        break;
      default:
        break;
    }
  });

export default reducer;
