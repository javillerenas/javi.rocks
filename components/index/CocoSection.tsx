import { FC } from 'react';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/layout';

// components
import { Section } from 'components/Section';
import { Title } from 'components/Title';

// images
import Coco from '../../public/images/coco.webp';

export const CocoSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">coco 🐶</Title>
    <Text color="brand.grey">
      I'm a proud pup-dad of a beautiful malti-poo called Coco
    </Text>
    <Box
      mt="40px"
      mx="auto"
      sx={{
        '& > * ': {
          borderRadius: '10px',
        },
      }}
    >
      <Image src={Coco} />
    </Box>
  </Section>
);
