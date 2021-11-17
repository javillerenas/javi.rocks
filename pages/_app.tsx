import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// helpers
import { theme } from 'helpers/theme';
// styles
import 'styles/global.css';
// lib
import { useAnalytics } from 'lib/useAnalytics';
import { useEasterEgg } from 'helpers/useEasterEgg';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useAnalytics();
  useEasterEgg();

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
