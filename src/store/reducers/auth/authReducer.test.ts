import authReducer, { AuthState } from './authReducer';

test('authReducer의 switch에서 default로 걸렸을때, initialState가 출력되는지 확인', () => {
  const initialState: AuthState = {
    token: null,
  };
  const newState = authReducer(undefined, {}); // no state, no action
  expect(newState).toEqual(initialState);
});
