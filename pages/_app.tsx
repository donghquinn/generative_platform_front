import '../styles/global.css';

import React from 'react';
import Head from 'next/head';
import Menu from '../components/common/menu';
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

function MyApp({
  children,
}: {
  children: React.ReactNode;
})  {
  return (
    <html>
      <Head>
        <title>IMLAB ChatGPT</title>

      </Head>
      <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4259757759902386"
     crossOrigin="anonymous"></Script>
        
        <RecoilRoot>
          <body>
          <Menu></Menu>
            {children}
          </body>
        </RecoilRoot>
    </html>
  );
}

export default MyApp;
