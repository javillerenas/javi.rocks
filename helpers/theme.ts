import { extendTheme } from '@chakra-ui/react';

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

export const theme = extendTheme({ colors });
