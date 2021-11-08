import { FC } from 'react';
import { HStack } from '@chakra-ui/layout';

// components
import { Icon, IconName } from 'components/Icon';
import { IconProps } from '@chakra-ui/react';
import { ExternalLink } from './ExternalLink';
// constants
import { TWITTER_URL, LINKEDIN_URL, GITHUB_URL } from 'helpers/constants';

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

interface SocialIcons {
  iconSizes?: IconProps['boxSize'];
}

export const SocialIcons: FC<SocialIcons> = ({ iconSizes = 4 }) => (
  <HStack spacing="3">
    {LINKS.map(({ iconName, url }) => (
      <ExternalLink key={url} href={url} borderRadius="5px" hideExternalIcon>
        <Icon
          boxSize={iconSizes}
          color="brand.greyDarker"
          name={iconName}
          transition="0.1s ease"
          _hover={{ color: 'brand.grey' }}
        />
      </ExternalLink>
    ))}
  </HStack>
);
