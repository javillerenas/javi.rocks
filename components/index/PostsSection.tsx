import { FC } from 'react';

// components
import { Section } from 'components/layout/Section';
import { SectionInProgress } from './SectionInProgress';
import { Title } from 'components/Title';
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

export const PostsSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">
      posts <HiddenFromScreenReader>✍🏽</HiddenFromScreenReader>
    </Title>
    <SectionInProgress />
  </Section>
);
