import { FC } from 'react';

// components
import { Stack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { Section } from 'components/layout/Section';
import { Title } from 'components/Title';
import { Card } from 'components/Card';
import { CardLink, CardLinkProps } from 'components/CardLink';
import { Span } from 'components/Span';
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

const PROJECTS: CardLinkProps[] = [
  {
    title: (
      <>
        <Span color="brand.lightBlue">Dragon Slayer</Span>{' '}
        <HiddenFromScreenReader>🐲⚔️</HiddenFromScreenReader>
      </>
    ),
    href: '/games',
    borderColor: 'brand.lightBlue',
    text: 'Learn about the first (and sadly only) game I’ve made – a hack-and-slash 2D game',
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
        <Box as="li" key={project.href}>
          <CardLink {...project} />
        </Box>
      ))}
      <Card
        title={
          <>
            Work in progress{' '}
            <HiddenFromScreenReader>🚧 🚧 🚧</HiddenFromScreenReader>
          </>
        }
        text="Cool things coming soon..."
        borderColor="brand.yellow"
      />
    </Stack>
  </Section>
);
