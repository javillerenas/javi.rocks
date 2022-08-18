import type { NextPage } from 'next';
import { Box, Text, VStack } from '@chakra-ui/layout';

// general components
import { Container } from 'components/layout/Container';
import { Section } from 'components/layout/Section';
import { ExternalLink } from 'components/ExternalLink';
import { Title } from 'components/Title';
import { Span } from 'components/Span';
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

const META_TAGS = {
  title: 'Dragon Slayer | Video game designed by Javier Llerenas',
  description: 'Video games designed and developer by Javier Llerenas',
};

const GameDev: NextPage = () => (
  <Container metaTags={META_TAGS}>
    <Section bg="brand.heroBackground" direction="column" align="baseline">
      <Title as="h1" fontSize={['60px', '4xl']} lineHeight={['70px', '85px']}>
        Game dev <HiddenFromScreenReader>👾</HiddenFromScreenReader>
      </Title>

      <VStack spacing="5" align="baseline" color="brand.grey" mb="70px">
        <Text>I have always loved video games.</Text>
        <Text>In my earlier years I loved playing them.</Text>
        <Text>
          More recently, I’ve been passionate about building them.
        </Text>
      </VStack>
    </Section>

    {/* My first game */}
    <Section
      py="30px"
      px={['20px', '50px']}
      direction="column"
      align="baseline"
    >
      <Title as="h2">
        My first video game <HiddenFromScreenReader>🐲</HiddenFromScreenReader>
      </Title>
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
          , and to my surprise it was actually kinda fun!{' '}
          <HiddenFromScreenReader>🙌🏽</HiddenFromScreenReader>
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
    </Section>

    {/* <Section mt="50px">
      <Subscribe
        title="Want to be notified about future projects?"
        description="Subscribe to my newsletter to be notified of major updates"
      />
    </Section> */}
  </Container>
);

export default GameDev;
