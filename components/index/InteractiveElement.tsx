import { FC } from 'react';

// components
import { Box, BoxProps, Link } from '@chakra-ui/layout';
import { ButtonProps } from '@chakra-ui/react';
import { GhostInternalLink } from 'components/InternalLink';

type LinkCard = {
  /** URL to navigate to */
  href: string;
};
type ButtonCard = {
  /** Callback to call */
  onClick: BoxProps['onClick'] & ButtonProps['onClick'];
};
type NonInteractiveCard = {};

export type InteractiveElementProps =
  | LinkCard
  | ButtonCard
  | NonInteractiveCard;

/**
 * Reusable component thats for interactive components.
 *
 * This component wraps its children in a button or link based on the props passed.
 *
 * Example:
 * ```
 * type BaseCardProps = { title: string };
 * type CardProps = BaseCardProps & InteractiveElementProps;
 *
 * const Card = ({ title, ...props }) => (
 *   <InteractiveElement {...props}>
 *     <Card>{title}</Card>
 *   </InteractiveElement>
 * )
 * ```
 */
export const InteractiveElement: FC<InteractiveElementProps> = (props) => {
  if ('onClick' in props) {
    return (
      <Box as="button" onClick={props.onClick}>
        {props.children}
      </Box>
    );
  } else if ('href' in props) {
    const urlType = getUrlType(props.href);
    if (urlType === 'internal') {
      return (
        <GhostInternalLink isGhost href={props.href} display="block">
          {props.children}
        </GhostInternalLink>
      );
    }
    return (
      <Link href={props.href} display="block">
        {props.children}
      </Link>
    );
  } else {
    return <>{props.children}</>;
  }
};

const INTERNAL_URLS = ['http', 'tel', 'email'];

const getUrlType = (url: string): 'internal' | 'external' => {
  if (INTERNAL_URLS.some((prefix) => url.startsWith(prefix))) {
    return 'external';
  }
  return 'internal';
};

export const getInteractiveElementType = (
  props: InteractiveElementProps,
): 'link' | 'button' | 'non-interactive' =>
  'href' in props ? 'link' : 'onClick' in props ? 'button' : 'non-interactive';
