import * as React from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/styled/global';
// global css
import 'normalize.css/normalize.css';
import CardContextProvider from '@md-modules/shared/Contexts/cart';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Serega's Shop</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <ThemeProvider theme={theme}>
      <CardContextProvider>
        <Component {...pageProps} />
      </CardContextProvider>
    </ThemeProvider>
    <GlobalStyles />
  </>
);

export default MyApp;
