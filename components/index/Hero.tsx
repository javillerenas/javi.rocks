import { FC } from 'react';

// hooks
import { useToken } from '@chakra-ui/react';

// components
import Image from 'next/image';
import {
  Box,
  Heading,
  HStack,
  TextProps,
  VStack,
  Stack,
} from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { Section } from 'components/Section';
import { SocialIcons } from 'components/SocialIcons';

// images
import Javi from '../../public/images/javi.webp';

const HERO_MIN_HEIGHT = 550;

export const Hero: FC = () => {
  const [blue, pink, green, yellow] = useToken('colors', [
    'brand.blue',
    'brand.pink',
    'brand.green',
    'brand.yellow',
  ]);
  return (
    <Section
      minHeight={['450px', '350px', '450px', HERO_MIN_HEIGHT]}
      bg="brand.heroBackground"
      justify="center"
    >
      <Stack
        align="center"
        direction={['column-reverse', 'row']}
        spacing={[0, '25px', '40px', '60px']}
        position="relative"
        py={[10, 0]}
      >
        {/* hero image */}
        <Box
          display={['none', 'block']}
          position="relative"
          width={['150px', '150px', '200px', '250px']}
          minWidth={['150px', '150px', '200px', '250px']}
          bottom={['-31px', '-32px', '-31px', '-33px']}
        >
          <Image src={Javi} />
        </Box>

        {/* hero text */}
        <VStack
          spacing="20px"
          align="baseline"
          maxW={['450px', null, '500px', null]}
        >
          <Heading
            as="h1"
            fontSize={['2xl', null, '4xl']}
            lineHeight={['45px', null, '80px']}
          >
            Javi
            <br />
            Llerenas
          </Heading>
          <HeroText>
            software engineer focused on{' '}
            <span style={{ color: blue }}>front end engineering</span> and{' '}
            <span style={{ color: blue }}>serverless apps</span>
          </HeroText>
          <HeroText>
            currently learning <span style={{ color: pink }}>web3</span>,{' '}
            <span style={{ color: green }}>game dev</span>, and{' '}
            <span style={{ color: yellow }}>3d modeling</span>
          </HeroText>
          <SocialIcons iconSizes="5" />
        </VStack>
      </Stack>
    </Section>
  );
};

const HeroText: FC<TextProps> = (props) => (
  <Text color="brand.grey" {...props} />
);
