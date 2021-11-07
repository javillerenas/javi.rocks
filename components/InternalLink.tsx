import { FC } from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface InternalLinkProps extends Omit<ChakraLinkProps, 'href'> {
  isExternal: boolean;
  href: NextLinkProps['href'];
}

export const InternalLink: FC<InternalLinkProps> = ({
  href,
  children,
  ...props
}) => (
  <NextLink href={href} scroll={true}>
    <ChakraLink {...props}>{children}</ChakraLink>
  </NextLink>
);
