import type { NextPage } from 'next';
import Head from 'next/head';
import { Box, Text, VStack } from '@chakra-ui/layout';

// general components
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Section } from 'components/Section';
import { ExternalLink } from 'components/ExternalLink';
import { Title } from 'components/Title';

const GameDev: NextPage = () => (
  <>
    <Head>
      <title>Javi Llerenas | Game developer.</title>
      <meta
        name="description"
        content="Video games designed and developer by Javier Llerenas"
      />
    </Head>

    <Header />
    <Box as="main">
      <Section
        bg="brand.heroBackground"
        direction="column"
        align="baseline"
      >
        <Title as="h1" fontSize="70px">
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
            <Box as="span" color="brand.green">
              dragons
            </Box>
            . Also, I have always loved the{' '}
            <Box as="i" color="brand.green">
              hack-and-slash
            </Box>{' '}
            video-game genre.
          </Text>
          <Text>
            During my first winter break in college, I figured I would try out
            my skills by building a small video game in{' '}
            <ExternalLink href="https://scratch.mit.edu/">Scratch</ExternalLink>
          </Text>
          <Text>
            The idea was simple, combine my passion for dragons with the
            hack-and-slash genre, and come up with something I’d love to play.
          </Text>
          <Text>
            I called it{' '}
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
            In 2021, I have been really interested in{' '}
            <Box as="span" color="brand.pink">
              web3
            </Box>
          </Text>
          <Text>
            I believe the blockchain and smart contracts are technologies that
            will truly bring a paradigm shift to many industries.
          </Text>
          <Text>
            The one I am really excited about is the paradigm shift in{' '}
            <Box as="span" color="brand.green">
              gaming
            </Box>
          </Text>
          .
          <Text>
            The idea that gamers will be able to <b>OWN</b> game assets as NFTs
            is incredible.
          </Text>
        </VStack>

        {/* Benefits of web3 for gaming  */}
        <Title as="h3" fontSize="30px" mt="30px" color="brand.whiteSecondary">
          My next video game
        </Title>
        <VStack spacing="5" align="baseline" color="brand.grey" mb="30px">
          <Text>
            In the next few months, I will be working diligently to bring to
            life a video game idea that combines RPGs with the world of web3.
          </Text>
          <Text>
            I will be documenting my progression both in here as well as in
            Twitter – follow me{' '}
            <ExternalLink
              href="https://www.twitter.com/javibalvinn"
              color="brand.blueLight"
            >
              @javibalvinn{' '}
            </ExternalLink>
          </Text>
        </VStack>
      </Section>

      <div style={{ height: '200px' }} />
    </Box>
    <Footer />
  </>
);

export default GameDev;
