import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

/** helpers */
import { theme } from 'helpers/theme';

import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
