import { FC } from 'react';
import { Text, VStack } from '@chakra-ui/layout';

export const SectionInProgress: FC = () => (
  <VStack
    width={['100%', null, '80%']}
    mx="auto"
    padding="30px"
    border="3px solid"
    borderColor="brand.yellow"
    color="brand.yellow"
    borderRadius="10px"
    fontSize="20px"
  >
    <Text aria-hidden>🚧 🚧 🚧</Text>
    <Text textAlign="center">section in progress...</Text>
  </VStack>
);
