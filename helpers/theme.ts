import { extendTheme } from '@chakra-ui/react';

const FONT =
  "JetBrains Mono, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;";

const colors = {
  brand: {
    blue: '#0073DC',
    blueLight: '#06BDF9',
    black: '#303030',
    grey: '#B2B2B2',
    white: '#F3F3F3',
    whiteSecondary: '#DADADA',
  },
};

const fonts = {
  body: FONT,
};

export const theme = extendTheme({ colors, fonts });
