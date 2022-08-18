import { FC } from 'react';
import { Box } from '@chakra-ui/layout';
import { Text, VisuallyHidden } from '@chakra-ui/react';
import Image from 'next/image';

// components
import { Section } from 'components/layout/Section';
import { SocialIcons } from 'components/SocialIcons';
// images
import Cat from 'public/images/cat.webp';
import { Span } from 'components/Span';
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

const FOOTER_HEIGHT = '60px';

export const Footer: FC = () => (
  <Section
    as="footer"
    height={FOOTER_HEIGHT}
    bg="brand.blackSecondary"
    mt="0"
    position="relative"
  >
    <Text flex="1" fontSize="sm" color="brand.grey">
      Made with <HiddenFromScreenReader>🔥</HiddenFromScreenReader>
      <VisuallyHidden>Passion</VisuallyHidden>
    </Text>
    <SocialIcons />

    {/* Cat image */}
    <Box width="125px" position="absolute" bottom="90%" right="5%">
      <Image alt="Image of a cat with cool glasses" src={Cat} />
    </Box>

    {/* Box to have social icons centered, but on the right when on mobile */}
    <Box flex="1" display={['none', 'block']} />
  </Section>
);
