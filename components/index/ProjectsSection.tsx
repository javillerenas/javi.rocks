import { FC } from 'react';

// components
import { Box, BoxProps, Stack, Text, VStack } from '@chakra-ui/layout';
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { InternalLink } from 'components/InternalLink';

const PROJECTS: CardLinkProps[] = [
  {
    title: 'Upcoming web3 RPG game 🐲',
    href: '/game-dev',
    borderColor: '#8EC5FC',
    text: 'Learn about the video game I will be developing that will combine aRPG with web3',
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
        text="I have a few ideas for cool web apps that I'll be working on soon..."
        borderColor="brand.yellow"
      />
    </Stack>
  </Section>
);

interface CardLinkProps extends CardProps {
  href: string;
}
export const CardLink: FC<CardLinkProps> = ({ href, ...props }) => (
  <InternalLink borderRadius="10px" href={href} p="0">
    <Card {...props} />
  </InternalLink>
);

interface CardProps {
  borderColor?: BoxProps['borderColor'];
  title: string;
  text: string;
}
export const Card: FC<CardProps> = ({
  borderColor = 'brand.white',
  title,
  text,
}) => (
  <Box
    width={['100%', null, '200px']}
    minHeight={['150px', null, '280px']}
    borderRadius="10px"
    border="3px solid"
    borderColor={borderColor}
  >
    <VStack spacing="5" p="20px" align="baseline">
      <Text fontWeight="bold" fontSize="20px">
        {title}
      </Text>
      <Text fontSize="14px" color="brand.grey" fontWeight="bold">
        {text}
      </Text>
    </VStack>
  </Box>
);
