import type { NextPage } from 'next';

// components
import { Container } from 'components/layout/Container';
import { Hero } from 'components/index/Hero';
import { Marquee } from 'components/index/Marquee';
import { CareerSection } from 'components/index/CareerSection';
import { PostsSection } from 'components/index/PostsSection';
import { ProjectsSection } from 'components/index/ProjectsSection';
import { CocoSection } from 'components/index/CocoSection';
import { Subscribe } from 'components/Subscribe';
import { Section } from 'components/layout/Section';

const Home: NextPage = () => (
  <Container>
    <Hero />
    <Marquee />
    <ProjectsSection />
    <CareerSection />
    <PostsSection />
    <CocoSection />
    <Section mt="100px">
      <Subscribe />
    </Section>
  </Container>
);

export default Home;
