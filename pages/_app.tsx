import '../styles/global.css';

import dynamic from "next/dynamic";
import React from 'react';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import Script from 'next/script';
import { Metadata } from 'next';

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

function MyApp ( { Component, pageProps: { session, ...pageProps } } )
{
  const Menu = dynamic( () => import( "../components/common/menu" ) );
  const Footer = dynamic( () => import( "../components/common/footer" ) );
  
  return (
    <>
      <Head>
        <title>donghquinn ChatGPT</title>
        <metadata ></metadata>
      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4259757759902386"
     crossOrigin="anonymous"></Script>
        <RecoilRoot>
        <Menu></Menu>
        <Component {...pageProps} />
        <Footer></Footer>
        </RecoilRoot>
    </>
  );
}

export default MyApp;
