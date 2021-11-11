import { FC } from 'react';

// components
import Image from 'next/image';
import { Box, Heading, TextProps, VStack, Stack } from '@chakra-ui/layout';
import { Text } from '@chakra-ui/react';
import { Section } from 'components/Section';
import { SocialIcons } from 'components/SocialIcons';
import { Planet } from 'components/index/Planet';

// images
import Javi from '../../public/images/javi.webp';

const HERO_MIN_HEIGHT = 550;

export const Hero: FC = () => (
  <Section
    minHeight={['450px', '350px', '450px', HERO_MIN_HEIGHT]}
    bg="brand.heroBackground"
    justify="center"
    position="relative"
    mt="0"
  >
    <Planet />
    <Stack
      align="center"
      position="relative"
      direction={['column-reverse', 'row']}
      spacing={[0, '25px', '40px', '60px']}
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
          <Box as="span" color="brand.blue">
            serverless web apps
          </Box>
        </HeroText>
        <HeroText>
          currently learning <b>web3</b>, <b>game dev</b>, and{' '}
          <b>3d modeling</b>
        </HeroText>
        <SocialIcons iconSizes="5" />
      </VStack>
    </Stack>
  </Section>
);

const HeroText: FC<TextProps> = (props) => (
  <Text
    color="brand.grey"
    fontWeight="medium"
    fontSize={['16px', null, '20px']}
    {...props}
  />
);
