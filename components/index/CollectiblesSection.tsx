import { FC } from 'react';
import Image from 'next/image';
import { Box, Text, VStack } from '@chakra-ui/layout';

// components
import { Section } from 'components/Section';
import { Title } from 'components/Title';

// images
import NFTs from '../../public/images/nfts.webp';

export const CollectiblesSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">collectibles ⭐️</Title>
    <VStack align="baseline" color="brand.grey">
      <Text>
        I'm really passionate about{' '}
        <Box as="span" color="brand.pink" fontWeight="bold">
          web3
        </Box>{' '}
        and its power to disrupt industries.
      </Text>
      <Text>
        I am especially interested in the intersection between web3 and{' '}
        <Box as="span" color="brand.blue" fontWeight="bold">
          gaming
        </Box>
        , and because of this I currently collect NFTs in projects that are
        working hard pushing the possibilities of web3 and gaming:
      </Text>
    </VStack>
    <Box bgColor="brand.blue" borderRadius="10px" px="10px" my="40px">
      <Box as="span" bottom="-7px" position="relative">
        <Image src={NFTs} />
      </Box>
    </Box>
  </Section>
);
