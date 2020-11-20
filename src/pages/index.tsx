import React, { FunctionComponent } from 'react';
import { css, useTheme } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';
import { AuthState } from '../store/reducers/auth/authReducer';

interface Props {}

const Index: FunctionComponent<Props> = () => {
  const theme = useTheme();
  const authReducer = useSelector<RootState, AuthState>(
    (state) => state.authReducer
  );
  return (
    <div
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
