import authReducer, { AuthActionTypes, AuthState } from './authReducer';

test('authReducer의 switch에서 default로 걸렸을때, initialState가 출력되는지 확인', () => {
  const initialState: AuthState = {
    user: null,
    profile: null,
    registerLoading: false,
    unregisterLoading: false,
    loginLoading: false,
    logoutLoading: false,
    meLoading: false,
    updatePasswordLoading: false,
    updateUserSnsLoading: false,
    updateProfileLoading: false,
    getProfileLoading: false,
  };
  const newState = authReducer(undefined, {} as AuthActionTypes); // no state, no action
  expect(newState).toEqual(initialState);
});
