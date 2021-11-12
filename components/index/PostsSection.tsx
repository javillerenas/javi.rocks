import { FC } from 'react';

// components
import { Section } from 'components/Section';
import { SectionInProgress } from './SectionInProgress';
import { Title } from 'components/Title';

export const PostsSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">posts ✍🏽</Title>
    <SectionInProgress />
  </Section>
);
