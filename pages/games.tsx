import type { NextPage } from 'next';
import { Box, Text, VStack } from '@chakra-ui/layout';

// general components
import { Container } from 'components/layout/Container';
import { Section } from 'components/layout/Section';
import { ExternalLink } from 'components/ExternalLink';
import { Title } from 'components/Title';
import { Span } from 'components/Span';

const META_TAGS = {
  description: 'Video games designed and developer by Javier Llerenas',
};

const GameDev: NextPage = () => (
  <Container metaTags={META_TAGS}>
    <Section bg="brand.heroBackground" direction="column" align="baseline">
      <Title fontSize={['60px', '4xl']} lineHeight={['70px', '85px']}>
        Game dev 👾
      </Title>

      <VStack spacing="5" align="baseline" color="brand.grey" mb="70px">
        <Text>I have always loved video games.</Text>
        <Text>In my earlier years I loved playing them.</Text>
        <Text>
          More recently, I am extremely passionate about building them.
        </Text>
        <hr />
      </VStack>
    </Section>

    {/* My first game */}
    <Section
      py="30px"
      px={['20px', '50px']}
      direction="column"
      align="baseline"
    >
      <Title as="h2">My first video game 🐲</Title>
      <VStack spacing="5" align="baseline" color="brand.grey" mb="30px">
        <Text>
          I have always been fascinated with{' '}
          <Span color="brand.green">dragons</Span>. Also, I have always loved
          the{' '}
          <Box as="i" color="brand.green">
            hack-and-slash
          </Box>{' '}
          video-game genre.
        </Text>
        <Text>
          During my first winter break in college{' '}
          <Span color="brand.greyDarker">(in Dec 2014)</Span>, I figured I would
          try out my skills by building a small video game in{' '}
          <ExternalLink href="https://scratch.mit.edu/">Scratch</ExternalLink>.
        </Text>
        <Text>
          The idea was simple, combine my passion for dragons with the
          hack-and-slash genre, and come up with something I’d love to play.
        </Text>
        <Text>
          After 7 days I came up with what I called{' '}
          <Box as="b" color="brand.green">
            Dragon Slayer
          </Box>
          , and to my surprise it was actually kinda fun! 🙌🏽
        </Text>
      </VStack>

      {/* Instructions */}
      <Title as="h3" fontSize="30px" mt="30px" color="brand.whiteSecondary">
        Instructions
      </Title>
      <VStack spacing="5" align="baseline" color="brand.grey" mb="30px">
        <Text>
          Move:{' '}
          <Box as="b" color="brand.blue">
            Arrow keys
          </Box>{' '}
          (←↑↓→)
        </Text>
        <Text>
          Attack:{' '}
          <Box as="b" color="brand.blue">
            Space bar
          </Box>
        </Text>
      </VStack>

      {/* Actual game */}
      <Box width="100%" mt="30px" borderRadius="10px" overflow="hidden">
        <iframe
          src="https://scratch.mit.edu/projects/41880168/embed"
          width="100%"
          height="452"
          frameBorder="0"
          scrolling="no"
          allowFullScreen
        />
      </Box>

      {/* What's next */}
      <Title as="h2" mt="100px">
        What’s next? 🚀
      </Title>
      <VStack spacing="5" align="baseline" color="brand.grey" mb="30px">
        <Text>
          In 2021 I’ve been really interested in{' '}
          <Span color="brand.pink">web3</Span>.
        </Text>
        <Text>
          I believe the blockchain and smart contracts are technologies that
          will truly bring a paradigm shift to many industries.
        </Text>
        <Text>
          I am incredibly interested in the changes it will bring to the{' '}
          <Span color="brand.green">gaming</Span> industry. And I want to be
          part of that revolution 🔥
        </Text>
      </VStack>

      {/* Benefits of web3 for gaming  */}
      <Title as="h3" fontSize="30px" mt="30px" color="brand.whiteSecondary">
        My next video game
      </Title>
      <VStack spacing="5" align="baseline" color="brand.grey" mb="30px">
        <Text>
          In the next few months, I will be working diligently to bring to life
          a video game idea that combines RPGs with the world of web3.
        </Text>
        <Text>
          I will be documenting my progression both in here as well as in
          Twitter – follow me{' '}
          <ExternalLink
            href="https://www.twitter.com/javibalvinn"
            color="brand.blueLight"
          >
            @javibalvinn
          </ExternalLink>
          .
        </Text>
      </VStack>
    </Section>
  </Container>
);

export default GameDev;
