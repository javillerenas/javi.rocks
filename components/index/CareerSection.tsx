import { FC } from 'react';
import { Text, VStack } from '@chakra-ui/layout';

// components
import { Section } from 'components/Section';
import { Title } from 'components/Title';
import { Span } from 'components/Span';

const POSITIONS = [
  {
    company: 'Opendoor',
    emoji: '🏡',
    years: '2021 - Now',
    text: (
      <>
        Currently working as a{' '}
        <Span fontWeight="bold" color="brand.green">
          software engineer
        </Span>{' '}
        in the Seller Products team helping make the user experience amazing.
        We’re disrupting the commercial real estate market 🔥
      </>
    ),
  },
  {
    preText: 'prev: ',
    company: 'AWS',
    emoji: '☁️',
    years: '2019 - 2021',
    text: (
      <>
        Worked in the Professional Services team as a{' '}
        <Span fontWeight="bold" color="brand.green">
          front end developer
        </Span>{' '}
        helping AWS customers build amazing serverless web apps using AWS
      </>
    ),
  },
  {
    preText: 'prev: ',
    years: '2018 - 2019',
    company: 'RedEye Apps',
    emoji: '🟥',
    text: <>Worked as a SDE intern doing front end things in Vue.js</>,
  },
];

export const CareerSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">career 💼</Title>
    <VStack spacing="5" align="baseline" color="brand.grey">
      {POSITIONS.map(({ company, emoji, text, preText, years }) => (
        <Text key={company}>
          {preText}
          <Span color="brand.white" fontWeight="bold">
            {company}
          </Span>{' '}
          <Span color="brand.greyDarker">({years})</Span> {emoji} – {text}
        </Text>
      ))}
    </VStack>
  </Section>
);
