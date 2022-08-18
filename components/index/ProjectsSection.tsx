import { FC } from 'react';

// components
import { Stack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Section } from 'components/layout/Section';
import { Title } from 'components/Title';
import { Card, CardProps } from 'components/Card';
import { Span } from 'components/Span';
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

type ProjectProps = CardProps & {
  /** Unique ID for the project */
  id: string;
};

const PROJECTS: ProjectProps[] = [
  {
    title: (
      <>
        <Span color="brand.lightBlue">Dragon Slayer</Span>{' '}
        <HiddenFromScreenReader>🐲⚔️</HiddenFromScreenReader>
      </>
    ),
    href: '/games',
    borderColor: 'brand.lightBlue',
    content:
      'Learn about the first (and sadly only) game I’ve made – a hack-and-slash 2D game',
    id: 'games',
  },
  {
    title: (
      <>
        Work in progress{' '}
        <HiddenFromScreenReader>🚧 🚧 🚧</HiddenFromScreenReader>
      </>
    ),
    borderColor: 'brand.yellow',
    content: 'Cool things coming soon...',
    id: 'wip',
  },
];

export const ProjectsSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h2">
      projects <HiddenFromScreenReader>🚀</HiddenFromScreenReader>
    </Title>

    <Stack
      spacing="5"
      direction={['column', null, 'row']}
      as="ul"
      listStyleType="none"
    >
      {PROJECTS.map((project) => (
        <Box as="li" key={project.id}>
          <Card {...project} />
        </Box>
      ))}
    </Stack>
  </Section>
);
