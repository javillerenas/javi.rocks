import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

/** helpers */
import { theme } from 'helpers/theme';
/** styles */
import 'styles/global.css'

import type { AppProps } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme} resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
