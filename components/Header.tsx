import { FC } from 'react';
import { Flex, HStack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';

// components
import { Icon, IconName } from 'components/Icon';
import { Link } from '@chakra-ui/react';

const HEADER_HEIGHT = 50;
const HEADER_MAX_WIDTH = 800;
const HEADER_PADDING_X = 10;

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
  <Flex as="header" justify="center" minHeight={HEADER_HEIGHT}>
    <Flex
      align="center"
      justify="space-between"
      maxWidth={HEADER_MAX_WIDTH}
      width="100%"
      px={HEADER_PADDING_X}
      py="5"
    >
      <HStack spacing="2">
        <Icon name={IconName.logo} boxSize="7" />
        <Text fontSize="lg" fontWeight="medium" color="brand.white">
          javi.
        </Text>
      </HStack>
      <HStack spacing="5">
        {LINKS.map(({ url, text }) => (
          <Link href={url} fontSize="xs" color="brand.grey">
            {text}
          </Link>
        ))}
      </HStack>
    </Flex>
  </Flex>
);
