import React, { FunctionComponent } from 'react';
import { TEST } from '../../config';
import { css, useTheme } from '@emotion/react';

interface Props {}

const Index: FunctionComponent<Props> = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        background-color: red;
        padding: ${theme.space * 2}px;
      `}
    >
      {TEST}
    </div>
  );
};

export default Index;
