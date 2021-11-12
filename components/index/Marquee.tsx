import { FC } from 'react';
import { keyframes, usePrefersReducedMotion } from '@chakra-ui/react';

// components
import { Box, Flex, FlexProps, Text, TextProps } from '@chakra-ui/layout';

const MARQUEE_WORDS = [
  'web dev',
  'serverless',
  'design',
  'web3',
  'game dev',
  '3d modeling',
];

const marquee = keyframes`
from { left: 0%; }
to { left: -100%; }
`;

export const Marquee: FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion
    ? undefined
    : `${marquee} infinite 25s linear`;

  return (
    <Box
      bgColor="brand.blue"
      background="brand.blueGradient"
      position="relative"
      whiteSpace="nowrap" // prevents two lines of text
      overflow="hidden" // prevents horizontal scrolling
      height="50px"
    >
      <AnimatedText animation={animation} />
      <AnimatedText animation={animation} />
      <AnimatedText animation={animation} />
      <AnimatedText animation={animation} />
      <AnimatedText animation={animation} />
    </Box>
  );
};

const AnimatedText: FC<FlexProps> = ({ animation, ...props }) => (
  <Flex
    display="inline-flex"
    position="relative"
    justifyContent="space-around"
    align="center"
    height="50px"
    color="brand.whiteSecondary"
    fontWeight="bold"
    animation={animation}
    {...props}
  >
    {MARQUEE_WORDS.map((word) => (
      <BannerText key={word}>{word}</BannerText>
    ))}
    <BannerText>web dev</BannerText>
    <BannerText>serverless</BannerText>
    <BannerText>design</BannerText>
    <BannerText>web3</BannerText>
    <BannerText>game dev</BannerText>
    <BannerText>3d modeling</BannerText>
  </Flex>
);

const BannerText: FC<TextProps> = (props) => (
  <Text
    px={['80px', null, '130px']}
    borderLeft="1px solid white"
    transition="all 0.5s ease"
    {...props}
  />
);
