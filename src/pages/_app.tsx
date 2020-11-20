import React, { FunctionComponent } from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { globalStyles } from '../shared/styles';
import theme from '../shared/theme';
import { AppProps } from 'next/app';
import { wrapper } from '../store';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default wrapper.withRedux(App);
