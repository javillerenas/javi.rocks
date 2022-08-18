import { FC } from 'react';
import { Heading, HeadingProps } from '@chakra-ui/layout';

export const Title: FC<HeadingProps> = ({ as, ...props }) => (
  <Heading as="h2" mb="40px" fontSize="40px" {...props} />
);
