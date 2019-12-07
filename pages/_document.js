// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { GoogleTagManagerScriptHead } from "../components/GoogleTagManagerScriptHead";
// import { GoogleTagManagerScriptBody } from "../components/GoogleTagManagerScriptBody";
import { GoogleTagManagerScriptHead, GoogleTagManagerScriptBody } from "../components/GoogleTagManagerScript";
// import React from "react";

class CustomerDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <GoogleTagManagerScriptHead />
                </Head>
                <body>
                <GoogleTagManagerScriptBody />
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }

}

export default CustomerDocument;
