import React, { FunctionComponent, useEffect } from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { globalStyles } from '../shared/styles';
import theme from '../shared/theme';
import { AppProps } from 'next/app';
import { wrapper } from '../store';
import { useDispatch } from 'react-redux';
import { meAction } from '../store/actions/auth/authActions';

const App: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(meAction());
  }, []);
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default wrapper.withRedux(App);
