import { FC } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
// helpers
import { theme } from 'helpers/theme';
// styles
import 'styles/global.css';

const App: FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme} resetCSS>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
