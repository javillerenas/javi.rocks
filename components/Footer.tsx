import { FC } from 'react';
import { Box } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import Image from 'next/image';

// components
import { Section } from 'components/Section';
import { SocialIcons } from './SocialIcons';
// images
import Cat from '../public/images/cat.webp';

const FOOTER_HEIGHT = 50;

export const Footer: FC = () => (
  <Section
    as="footer"
    maxHeight={FOOTER_HEIGHT}
    bg="brand.blackSecondary"
    mt="0"
  >
    <Text fontSize="sm" color="brand.greyDarker">
      Made with 🔥
    </Text>
    <SocialIcons />
    <Box width="0px" height={FOOTER_HEIGHT}>
      <Box width="125px" position="relative" top="-94px" right="120px">
        <Image alt="cat image with glasses" src={Cat} />
      </Box>
    </Box>
  </Section>
);
