import { FC } from 'react';
import { Text, VStack } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';

// components
import { Section } from 'components/layout/Section';
import { Title } from 'components/Title';
import { Span } from 'components/Span';
import { HiddenFromScreenReader } from 'components/HiddenFromScreenReader';

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
        in the Sell Direct team helping make the user experience amazing. We’re
        disrupting the commercial real estate market{' '}
        <HiddenFromScreenReader>🔥</HiddenFromScreenReader>
      </>
    ),
  },
  {
    inThePast: true,
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
    inThePast: true,
    years: '2018 - 2019',
    company: 'RedEye Apps',
    emoji: '🟥',
    text: 'Worked as a SDE intern doing front end stuff in Vue.js',
  },
];

export const CareerSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">
      career <HiddenFromScreenReader>💼</HiddenFromScreenReader>
    </Title>
    <VStack spacing="5" align="baseline" color="brand.grey" as="ol">
      {POSITIONS.map(({ company, emoji, text, inThePast, years }) => (
        <Box as="li" key={company}>
          <Text>
            {inThePast && (
              <Box as="abbr" aria-label="previous" display="inline">
                prev:{' '}
              </Box>
            )}
            <Span color="brand.white" fontWeight="bold">
              {company}
            </Span>{' '}
            <Span color="brand.greyDarker">({years})</Span>{' '}
            <HiddenFromScreenReader>{emoji}</HiddenFromScreenReader> – {text}
          </Text>
        </Box>
      ))}
    </VStack>
  </Section>
);
