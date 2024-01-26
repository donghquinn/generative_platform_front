import '../styles/global.css';
import '@mantine/core/styles.css';
import '@mantine/core/styles/Button.css';
import '@mantine/core/styles/UnstyledButton.css';

import { createTheme, Divider, MantineProvider } from '@mantine/core';
import Head from 'next/head';
import Script from 'next/script';
import { RecoilRoot } from 'recoil';
import Footer from '../components/common/footer';
import Menu from '../components/common/menu';


const theme = createTheme( {
    fontFamily: 'Open Sans, sans-serif',
    primaryColor: 'cyan',
  });

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>donghquinn ChatGPT</title>
        <meta name='title' content='Generate Platform'/>
        <meta name='description' content='Generate Chat, Songs, Images, and etc...'/>
        <meta name='keywords' content='openai, chat, images, songs'/>
        <meta name='author' content='donghquinn'/>
        <meta name='creator' content='donghquinn'/>
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
