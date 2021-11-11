import type { NextPage } from 'next';
import Head from 'next/head';
import { Box } from '@chakra-ui/layout';

// components
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Hero } from 'components/index/Hero';
import { HeroBanner } from 'components/index/HeroBanner';
import { CareerSection } from 'components/index/CareerSection';
import { PostsSection } from 'components/index/PostsSection';
import { ProjectsSection } from 'components/index/ProjectsSection';
import { CollectiblesSection } from 'components/index/CollectiblesSection';
import { CocoSection } from 'components/index/CocoSection';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Javi Llerenas | Software engineer and designer.</title>
      <meta
        name="description"
        content="Personal page of Javier Llerenas, a software engineer and designer"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
    <Box as="main">
      <Hero />
      <HeroBanner />
      <CareerSection />
      <CollectiblesSection />
      <CocoSection />
      <ProjectsSection />
      <PostsSection />
      <div style={{ height: '200px' }} />
    </Box>
    <Footer />
  </>
);

export default Home;
