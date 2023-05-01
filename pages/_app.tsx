import '../styles/global.css';
import React from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
        <title>Scrape</title>
        {/* <script src="https://code.highcharts.com/highcharts.js"></script> */}
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
