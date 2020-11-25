import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { AuthState } from '../store/reducers/auth/authReducer';
import { NextPage } from 'next';
import {
  loginAction,
  logoutAction,
  registerAction,
  unregisterAction,
} from '../store/actions/auth/authActions';

interface Props {}

const Index: NextPage<Props> = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector<RootState, AuthState>(
    (state) => state.authReducer
  );
  return (
    <div
      data-test="page-index-wrapper"
      css={css`
        background-color: red;
        padding: ${theme.space * 2}px;
      `}
    >
      <button
        onClick={() =>
          dispatch(
            registerAction({
              username: 'test',
              email: `the2792@gmail.com`,
              password: '1234',
            })
          )
        }
      >
        Register
      </button>

      <button onClick={() => dispatch(unregisterAction())}>Unregister</button>

      <button
        onClick={() =>
          dispatch(
            loginAction({ email: 'the2792@gmail.com', password: '1234' })
          )
        }
      >
        Login
      </button>

      <button onClick={() => dispatch(logoutAction())}>Logout</button>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
};

export default Index;
