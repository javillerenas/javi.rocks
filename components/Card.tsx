import { FC, ReactNode } from 'react';

// components
import { BoxProps, Text, VStack } from '@chakra-ui/layout';
import {
  InteractiveElement,
  InteractiveElementProps,
} from './index/InteractiveElement';

type BaseCardProps = {
  borderColor?: BoxProps['borderColor'];
  title: string | ReactNode;
  content: string;
};

export type CardProps = BaseCardProps & InteractiveElementProps;

export const Card: FC<CardProps> = ({
  borderColor = 'brand.white',
  title,
  content,
  ...props
}) => (
  <InteractiveElement {...props}>
    <VStack
      spacing="5"
      p="20px"
      align="baseline"
      width={['100%', null, '230px']}
      minHeight={['150px', null, '280px']}
      borderRadius="10px"
      border="3px solid"
      borderColor={borderColor}
    >
      <Text fontWeight="bold" fontSize="20px">
        {title}
      </Text>
      <Text fontSize="14px" color="brand.grey" fontWeight="bold">
        {content}
      </Text>
    </VStack>
  </InteractiveElement>
);
