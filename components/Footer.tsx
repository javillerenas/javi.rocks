import { FC } from 'react';
import { Box, Flex, HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';

// components
import { Icon, IconName } from 'components/Icon';
import { ExternalLink } from './ExternalLink';
// constants
import { TWITTER_URL, LINKEDIN_URL, GITHUB_URL } from 'helpers/constants';
// images
import Cat from '../public/images/cat.webp';

const FOOTER_HEIGHT = 50;
const FOOTER_MAX_WIDTH = 1200;
const FOOTER_PADDING = 10;

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
  <Flex
    as="footer"
    justify="center"
    maxHeight={FOOTER_HEIGHT}
    bg="brand.blackSecondary"
  >
    <Flex
      align="center"
      justify="space-between"
      maxWidth={FOOTER_MAX_WIDTH}
      width="100%"
      px={FOOTER_PADDING}
    >
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
      <Box width="10px">
        <Box width="125px" position="relative" top="-67px" right="100px">
          <Image src={Cat} />
        </Box>
      </Box>
    </Flex>
  </Flex>
);
