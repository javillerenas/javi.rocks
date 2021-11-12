import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';

/** helpers */
import { theme } from 'helpers/theme';
/** styles */
import 'styles/global.css';

import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="images/icons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="images/icons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="images/icons/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="apple-mobile-web-app-title" content="javibalvin" />
      <meta name="application-name" content="javibalvin" />
      <meta name="theme-color" content="#0085FF" />
    </Head>
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
);

export default MyApp;
