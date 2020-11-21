import React from 'react';
import { css, useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { AuthState } from '../store/reducers/auth/authReducer';
import { NextPage } from 'next';

interface Props {}

const Index: NextPage<Props> = () => {
  const theme = useTheme();
  const authReducer = useSelector<RootState, AuthState>(
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
      hey {JSON.stringify(authReducer)}
    </div>
  );
};

export default Index;
