import React from 'react';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { globalStyles } from '../shared/styles';
import theme from '../shared/theme';

const App = ({ Component, pageProps }) => (
  <CacheProvider value={cache}>
    {globalStyles}
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
