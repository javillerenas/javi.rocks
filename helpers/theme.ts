import { extendTheme } from '@chakra-ui/react';

const FONT =
  'JetBrains Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;';

const colors = {
  brand: {
    blue: '#0073DC',
    blueLight: '#06BDF9',
    black: '#303030',
    blackSecondary: '#1F1F1F',
    grey: '#B2B2B2',
    greyDarker: '#585858',
    white: '#F3F3F3',
    whiteSecondary: '#DADADA',
  },
};

const fonts = {
  body: FONT,
};

const fontSizes = {
  xss: '0.5rem',
  xsss: '0.25rem',
};

export const theme = extendTheme({ colors, fonts, fontSizes });
