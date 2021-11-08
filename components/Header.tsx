import { FC } from 'react';
import { useRouter } from 'next/router';

// components
import { HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import { Section } from 'components/Section';
import { Icon, IconName } from 'components/Icon';
import { InternalLink } from 'components/InternalLink';

const HEADER_HEIGHT = 50;

const LINKS = [
  {
    text: 'home',
    url: '/',
  },
  {
    text: 'about',
    url: '/about',
  },
  {
    text: 'blog',
    url: '/blog',
  },
];

export const Header: FC = () => {
  const { pathname } = useRouter();

  console.log('pathname: ', pathname);
  console.log('pathname: ', pathname === LINKS[0].url);

  return (
    <Section as="header" minHeight={HEADER_HEIGHT} py="6">
      <HStack spacing="5">
        {LINKS.map(({ url, text }) => {
          const isActive = url === pathname;
          return (
            <InternalLink
              key={url}
              href={url}
              fontSize="md"
              color={isActive ? 'brand.white' : 'brand.grey'}
              fontWeight={isActive ? 'bold' : 'regular'}
            >
              {text}
            </InternalLink>
          );
        })}
      </HStack>
      <HStack spacing="2">
        <Icon name={IconName.logo} boxSize="9" />
        <Text fontSize="30px" fontWeight="bold" color="brand.white">
          javi.
        </Text>
      </HStack>
    </Section>
  );
};
