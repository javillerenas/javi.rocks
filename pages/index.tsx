import type { NextPage } from 'next';

// components
import { Container } from 'components/layout/Container';
import { Hero } from 'components/index/Hero';
import { Marquee } from 'components/index/Marquee';
import { CareerSection } from 'components/index/CareerSection';
import { PostsSection } from 'components/index/PostsSection';
import { ProjectsSection } from 'components/index/ProjectsSection';
import { CollectiblesSection } from 'components/index/CollectiblesSection';
import { CocoSection } from 'components/index/CocoSection';

const Home: NextPage = () => (
  <Container>
    <Hero />
    <Marquee />
    <ProjectsSection />
    <CareerSection />
    <PostsSection />
    <CollectiblesSection />
    <CocoSection />
  </Container>
);

export default Home;
