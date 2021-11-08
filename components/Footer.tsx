import { FC } from 'react';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';

// components
import { Section } from 'components/Section';
import { Icon, IconName } from 'components/Icon';
import { ExternalLink } from './ExternalLink';
// constants
import { TWITTER_URL, LINKEDIN_URL, GITHUB_URL } from 'helpers/constants';
// images
import Cat from '../public/images/cat.webp';

const FOOTER_HEIGHT = 50;
const LINKS = [
  {
    iconName: IconName.twitter,
    url: TWITTER_URL,
  },
  {
    iconName: IconName.github,
    url: GITHUB_URL,
  },
  {
    iconName: IconName.linkedIn,
    url: LINKEDIN_URL,
  },
];

export const Footer: FC = () => (
  <Section as="footer" maxHeight={FOOTER_HEIGHT} bg="brand.blackSecondary">
    <Text fontSize="sm" color="brand.greyDarker">
      Made with 🔥
    </Text>
    <HStack spacing="3">
      {LINKS.map(({ iconName, url }) => (
        <ExternalLink key={url} href={url} hideExternalIcon>
          <Icon boxSize="4" color="brand.greyDarker" name={iconName} />
        </ExternalLink>
      ))}
    </HStack>
    <Box width="0px">
      <Box width="125px" position="relative" top="-67px" right="120px">
        <Image src={Cat} />
      </Box>
    </Box>
  </Section>
);
