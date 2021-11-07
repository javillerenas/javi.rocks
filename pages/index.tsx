import { Box } from '@chakra-ui/layout';
import type { NextPage } from 'next';
import Head from 'next/head';

// components
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';

const Home: NextPage = () => (
  <Box>
    <Head>
      <title>Javi Llerenas | Software engineer and designer.</title>
      <meta
        name="description"
        content="Personal page of Javier Llerenas, a software engineer and designer"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Box as="main" height="700px">Content</Box>
    <Footer />
  </Box>
);

export default Home;
