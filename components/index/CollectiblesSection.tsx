import { FC } from 'react';
import Image from 'next/image';
import { Box, Text, VStack } from '@chakra-ui/layout';

// components
import { Section } from 'components/layout/Section';
import { Title } from 'components/Title';
import { ExternalLink } from 'components/ExternalLink';
import { Span } from 'components/Span';

// images
import NFTs from '../../public/images/nfts.webp';

export const CollectiblesSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">collectibles ⭐️</Title>
    <VStack align="baseline" color="brand.grey">
      <Text>
        I’m really passionate about{' '}
        <Span color="brand.pink" fontWeight="bold">
          web3
        </Span>{' '}
        and its power to disrupt industries.
      </Text>
      <Text>
        I’m especially interested in the intersection between web3 and{' '}
        <Span color="brand.green" fontWeight="bold">
          gaming
        </Span>
        , and because of this I currently collect NFTs in projects that are
        working hard pushing what’s possible. Specifically:
      </Text>
    </VStack>
    <VStack align="baseline" color="brand.grey" mt="30px">
      <Text>
        <ExternalLink
          title="Link to BoneWorld's website"
          href="https://www.boneworld.cc/"
        >
          BoneWorld
        </ExternalLink>
        : One of the only projects{' '}
        <Span color="brand.greyDarker">(That I know of)</Span> that will be
        providing fully rigged FBX files of the NFTs.
      </Text>
      <Text>
        <ExternalLink
          title="Link to Unirexcity's website"
          href="https://unirex.city/"
        >
          Unirexcity
        </ExternalLink>
        : Beautiful 3D NFT project that will be releasing a game. (One of its
        founders is a veteran in the video game industry).
      </Text>
    </VStack>
    <Box bgColor="brand.blue" borderRadius="10px" px="10px" my="40px">
      <Span bottom="-7px" position="relative">
        <Image alt="Image of my most precious NFTs" src={NFTs} />
      </Span>
    </Box>
  </Section>
);
