import { FC } from 'react';

// components
import { InternalLink } from 'components/InternalLink';
import { Card, CardProps } from 'components/Card';

export interface CardLinkProps extends CardProps {
  href: string;
}
export const CardLink: FC<CardLinkProps> = ({ href, ...props }) => (
  <InternalLink borderRadius="10px" href={href} p="0">
    <Card {...props} />
  </InternalLink>
);
