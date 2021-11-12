import { FC } from 'react';
import { Box, Text, VStack } from '@chakra-ui/layout';

// components
import { Section } from 'components/Section';
import { Title } from 'components/Title';

const POSITIONS = [
  {
    company: 'Opendoor 🏡',
    text: (
      <>
        Currently working as a <b>software engineer</b> in the Seller Products
        team helping make the user experience amazing. We’re disrupting the
        commercial real estate market 🔥
      </>
    ),
  },
  {
    preText: 'prev: ',
    company: 'AWS ☁️',
    text: (
      <>
        Worked in the <i>Professional Services</i> team helping AWS customers
        build amazing serverless web apps using AWS
      </>
    ),
  },
  {
    preText: 'prev: ',
    company: 'RedEye Apps 🟥',
    text: <>Worked as a SDE intern doing front end things in Vue.js</>,
  },
];

export const CareerSection: FC = () => (
  <Section py="30px" px={['20px', '50px']} direction="column" align="baseline">
    <Title as="h1">career 💼</Title>
    <VStack spacing="5" align="baseline" color="brand.grey">
      {POSITIONS.map(({ company, text, preText }) => (
        <Text key={company}>
          {preText}
          <Box as="span" color="brand.white" fontWeight="bold">
            {company}
          </Box>{' '}
          – {text}
        </Text>
      ))}
    </VStack>
  </Section>
);
