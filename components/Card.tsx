import { FC } from 'react';

// components
import { Box, BoxProps, Text, VStack } from '@chakra-ui/layout';

export interface CardProps {
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
    width={['100%', null, '230px']}
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
