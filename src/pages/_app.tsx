import 'src/assets/css/tailwind-var.css';
// import 'src/assets/css/tailwind.css';
import 'src/assets/css/styles.css';

import Head from 'next/head';
import { GlobalStyles } from 'twin.macro';
import { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <>
      <Head>
        <title>NextJS - Tailwind - Styled-components</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <GlobalStyles />
      {getLayout(<Component {...pageProps} />)}
    </>
  );
};

export default App;
