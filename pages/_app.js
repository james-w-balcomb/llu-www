import React from 'react'
import App from 'next/app'
import Router from "next/router";
import withGA from "next-ga";

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();
const GA_MEASUREMENT_ID = publicRuntimeConfig.GA_MEASUREMENT_ID;
console.log(`GA_MEASUREMENT_ID: ${GA_MEASUREMENT_ID}`);

class MyApp extends App {
    // Only uncomment this method if you have blocking data requirements for
    // every single page in your application. This disables the ability to
    // perform automatic static optimization, causing every page in your app to
    // be server-side rendered.
    //
    // static async getInitialProps(appContext) {
    //   // calls page's `getInitialProps` and fills `appProps.pageProps`
    //   const appProps = await App.getInitialProps(appContext);
    //
    //   return { ...appProps }
    // }

    render() {
        const { Component, pageProps } = this.props;
        return <Component {...pageProps} />
    }
}

// export default MyApp
export default withGA("${GA_MEASUREMENT_ID_3}", Router)(MyApp);
