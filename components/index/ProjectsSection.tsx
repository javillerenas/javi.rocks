import { FC } from 'react';

// components
import { Stack } from '@chakra-ui/layout';
import { Section } from 'components/layout/Section';
import { Title } from 'components/Title';
import { Card } from 'components/Card';
import { CardLink, CardLinkProps } from 'components/CardLink';
import { Span } from 'components/Span';

const PROJECTS: CardLinkProps[] = [
  {
    title: <><Span color="brand.lightBlue">Dragon Slayer</Span> 🐲⚔️</>,
    href: '/games',
    borderColor: 'brand.lightBlue',
    text: 'Learn about my first hack-and-slash game, and my plans for creating a web3 game',
  },
];

export const ProjectsSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">projects 🚀</Title>

    <Stack spacing="5" direction={['column', null, 'row']}>
      {PROJECTS.map((project) => (
        <CardLink key={project.href} {...project} />
      ))}
      <Card
        title="Work in progress 🚧 🚧 🚧"
        text="I have bought a ton of domains. Time to actually work 💪🏽"
        borderColor="brand.yellow"
      />
    </Stack>
  </Section>
);
