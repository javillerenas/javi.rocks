import { FC } from 'react';

// components
import { Flex, HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import { Section } from 'components/Section';
import { Icon, IconName } from 'components/Icon';
import { Link } from '@chakra-ui/react';

const HEADER_HEIGHT = 50;

const LINKS = [
  {
    text: 'about',
    url: '/about',
  },
  {
    text: 'blog',
    url: '/blog',
  },
];

export const Header: FC = () => (
  <Section as="header" minHeight={HEADER_HEIGHT} py="6">
    <HStack spacing="2">
      <Icon name={IconName.logo} boxSize="9" />
      <Text fontSize="30px" fontWeight="medium" color="brand.white">
        javi.
      </Text>
    </HStack>
    <HStack spacing="5">
      {LINKS.map(({ url, text }) => (
        <Link
          key={url}
          href={url}
          fontSize="lg"
          color="brand.whiteSecondary"
          fontWeight="medium"
        >
          {text}
        </Link>
      ))}
    </HStack>
    {/* </Flex> */}
  </Section>
);
