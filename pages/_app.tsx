import '../styles/global.css';
import '@mantine/core/styles.css';

import { createTheme, MantineProvider } from '@mantine/core';
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
  
}

function MyApp ({ Component, pageProps: { session, ...pageProps } })
{
  // const Menu = dynamic( () => import( "../components/common/menu" ) );
  // const Footer = dynamic( () => import( "../components/common/footer" ) );
  
  const theme = createTheme({
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

  return (
    <>

        <Head>
          <title>donghquinn ChatGPT</title>
        <metadata ></metadata>
        
        </Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4259757759902386"
        crossOrigin="anonymous"></Script>
      <RecoilRoot>
          <MantineProvider theme={theme}>
          <Menu></Menu>
          <Component {...pageProps} />
            <Footer></Footer>
          </MantineProvider>
        </RecoilRoot>
    </>
  );
}

export default MyApp;
