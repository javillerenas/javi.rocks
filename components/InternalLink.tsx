import { FC } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';

interface InternalLinkProps extends Omit<ChakraLinkProps, 'href'> {
  href: NextLinkProps['href'];
}

export const InternalLink: FC<InternalLinkProps> = ({
  children,
  href,
  ...props
}) => (
  <NextLink href={href} passHref>
    <ChakraLink
      p="2"
      borderRadius="5px"
      _hover={{
        textDecor: 'none',
        backgroundColor: 'brand.blackSecondary',
      }}
      {...props}
    >
      {children}
    </ChakraLink>
  </NextLink>
);
