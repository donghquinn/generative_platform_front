import '../styles/global.css';

import React from 'react';
import Head from 'next/head';
import Menu from '../components/common/menu';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
import { Metadata } from 'next';
import logo from '../public/logo.png';

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
  
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>IMLAB ChatGPT</title>
        <metadata ></metadata>
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4259757759902386"
     crossOrigin="anonymous"></Script>

        <RecoilRoot>
        <Menu logo={logo}></Menu>
          <Component {...pageProps} />
        </RecoilRoot>
    </>
  );
}

export default MyApp;
