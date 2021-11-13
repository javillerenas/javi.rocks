import { FC } from 'react';
import Head from 'next/head';
import { Box } from '@chakra-ui/layout';

// layout components
import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';

interface MetaTags {
  title: string;
  description: string;
}

export type OptionalMetaTags = Partial<MetaTags>;

interface ContainerProps {
  metaTags?: OptionalMetaTags;
}

export const Container: FC<ContainerProps> = ({ children, metaTags }) => {
  const meta: MetaTags = {
    title: 'Javi Llerenas | Software engineer and designer.',
    description:
      'Personal page of Javier Llerenas, a software engineer and designer',
    ...metaTags,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.title} />
      </Head>

      <Header />
      <Box as="main">
        {children}
        <div style={{ height: '200px' }} />
      </Box>
      <Footer />
    </>
  );
};
