import { FC, FormEventHandler, ReactNode, useRef, useState } from 'react';
import { Box, Text, VStack } from '@chakra-ui/layout';
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { FormControl, FormHelperText } from '@chakra-ui/form-control';
import { Spinner } from '@chakra-ui/spinner';

const MAX_WIDTH = '600px';
const DEFAULT_TITLE = 'Subscribe to my newsletter';
const DEFAULT_DESCRIPTION =
  'Get emails from me about web and game dev, tech, and web3';

enum Form {
  initial = 'initial',
  loading = 'loading',
  success = 'success',
  error = 'error',
}

interface SubscribeState {
  status: Form;
  message?: string;
}

interface SubscribeProps {
  title?: ReactNode;
  description?: ReactNode;
}

export const Subscribe: FC<SubscribeProps> = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
}) => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [state, setState] = useState<SubscribeState>({
    status: Form.initial,
  });

  const subscribe: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setState({ status: Form.loading });

    if (!inputElement.current) return;

    try {
      const res = await fetch('/api/subscribe', {
        body: JSON.stringify({
          email: inputElement.current.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        setState({
          status: Form.error,
          message: error,
        });
        return;
      }

      inputElement.current.value = '';
      setState({
        status: Form.success,
        message: `Nice! You're now on the list 😎`,
      });
    } catch {
      setState({
        status: Form.error,
        message:
          'There was an error subscribing you :( Please try again later.',
      });
    }
  };

  return (
    <Box
      width="100%"
      maxW={MAX_WIDTH}
      mx="auto"
      p="20px"
      borderRadius="10px"
      border="3px solid"
      borderColor="brand.blue"
    >
      <VStack align="baseline" spacing="2">
        <Text fontSize="20px" fontWeight="bold">
          {title}
        </Text>
        <Text fontSize="14px" color="brand.grey">
          {description}
        </Text>
        <form onSubmit={subscribe} style={{ width: '100%' }}>
          <FormControl isRequired id="email">
            <InputGroup>
              <Input
                ref={inputElement}
                type="email"
                placeholder="tim@apple.com"
                aria-label="Email for newsletter"
                variant="filled"
                disabled={state.status === Form.loading}
                required
                pr="120px"
              />
              <InputRightElement w="110px">
                <Button
                  w="110px"
                  disabled={state.status === Form.loading}
                  type="submit"
                >
                  {state.status === Form.loading ? <Spinner /> : 'Subscribe'}
                </Button>
              </InputRightElement>
            </InputGroup>
            {(state.status === Form.initial ||
              state.status === Form.loading) && (
              <FormHelperText fontSize="11px">
                I’ll never spam you :)
              </FormHelperText>
            )}
            {state.status === Form.success && (
              <FormHelperText fontSize="12px" color="brand.green">
                ✅ {state.message}
              </FormHelperText>
            )}
            {state.status === Form.error && (
              <FormHelperText fontSize="12px" color="brand.pink">
                ⚠ {state.message}
              </FormHelperText>
            )}
          </FormControl>
        </form>
      </VStack>
    </Box>
  );
};
