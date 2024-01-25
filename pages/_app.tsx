import '../styles/global.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';

import React from 'react';
import { createTheme, Divider, MantineProvider } from '@mantine/core';
import { Metadata } from 'next';
import Head from 'next/head';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';
import Footer from '../components/common/footer';
import Menu from '../components/common/menu';

export const metadata: Metadata = {
  title: "dong-GPT",
  description: "Chat with OpenAi's chat-GPT",
  keywords: ["chatGPT", "openai", "chat"],
  authors: [{ name: 'donghquinn' }],
  creator: 'donghquinn',
  openGraph: {
    url: 'https://chat.andongh.com',
    siteName: 'chat',
    description: "Chat with OpenAi's chat-GPT"
  },
};

const theme = createTheme( {
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <>
      <Head>
        <title>donghquinn ChatGPT</title>
      <metadata ></metadata>
      
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4259757759902386"
      crossOrigin="anonymous"></Script>
      <RecoilRoot>
        <div className='bg-white'>
          <MantineProvider theme={theme}>
            <Menu></Menu>
            <Divider my="md" />
            <Component {...pageProps} />
            <Divider my="md" />
            <Footer></Footer>
          </MantineProvider>
        </div>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
