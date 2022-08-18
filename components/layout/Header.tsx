import { FC } from 'react';
// import { useRouter } from 'next/router';

// components
import { HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

import { Section } from 'components/layout/Section';
import { Icon, IconName } from 'components/Icon';
import { InternalLink } from 'components/InternalLink';

const HEADER_HEIGHT = 30;

const LINKS = [
  {
    text: 'home',
    url: '/',
  },
  {
    text: 'games',
    url: '/games',
  },
];

export const Header: FC = () => {
  // const { pathname } = useRouter();

  return (
    <Section as="header" minHeight={HEADER_HEIGHT} py="10px" mt="0">
      {/* <HStack spacing="1">
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
      </HStack> */}
      <HStack spacing="0">
        <InternalLink href="/">
          <Text
            fontSize="25px"
            fontWeight="bold"
            color="brand.whiteSecondary"
            display="inline"
          >
            javi
          </Text>
          <Icon name={IconName.logo} boxSize="7" aria-hidden />
        </InternalLink>
      </HStack>
    </Section>
  );
};
