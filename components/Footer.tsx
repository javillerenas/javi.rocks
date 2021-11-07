import { FC } from 'react';
import { Container } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';

export const Footer: FC = () => (
  <Container as="footer">
    <Text>
      Powered by{' '}
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
    </Text>
  </Container>
);
