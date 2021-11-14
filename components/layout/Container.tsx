import { FC } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { Box } from '@chakra-ui/layout';

// layout components
import { Footer } from 'components/layout/Footer';
import { Header } from 'components/layout/Header';
import { ROOT_URL } from 'helpers/constants';

interface MetaTags {
  title: string;
  description: string;
  /** Type of content https://ogp.me/#types   */
  type: string;
  /** URL for the location of the image for the page */
  image: string;
  /** A description of what is in the image */
  imageAlt: string;
}

export type OptionalMetaTags = Partial<MetaTags>;

interface ContainerProps {
  metaTags?: OptionalMetaTags;
}

export const Container: FC<ContainerProps> = ({ children, metaTags }) => {
  const router = useRouter();

  const meta: MetaTags = {
    title: 'Javi Llerenas | Software engineer and designer.',
    description:
      'Personal page of Javier Llerenas, a software engineer and designer',
    type: 'website',
    image: `${ROOT_URL}/images/og-image.png`,
    imageAlt: `The banner for Javi's website`,
    ...metaTags,
  };

  const currentPageUrl = `${ROOT_URL}${router.asPath}`;

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <link rel="canonical" href={currentPageUrl} />
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        {/*
         * twitter cards
         * more info: https://developer.twitter.com/en/docs/twitter-for-websites/cards/guides/getting-started
         */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@javibalvinn" />
        <meta name="twitter:creator" content="@javibalvinn" />
        <meta name="twitter:image" content={meta.image} />
        {/*
         * open graph tags
         * more info: https://ogp.me/
         */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:image:alt" content={meta.imageAlt} />
        <meta property="og:url" content={currentPageUrl} />
        <meta property="og:site_name" content="Javi Llerenas" />
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
