import '../styles/global.css';
import React from 'react';
import Head from 'next/head';
import Menu from '../components/common/menu';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>IMLAB ChatGPT</title>
        {/* <script src="https://code.highcharts.com/highcharts.js"></script> */}
      </Head>
        <Menu></Menu>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
    </>
  );
}

export default MyApp;
