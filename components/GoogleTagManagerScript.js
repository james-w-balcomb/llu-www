import React from 'react';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();
const GTM_CONTAINER_ID = publicRuntimeConfig.GTM_CONTAINER_ID;
console.log(`GTM_CONTAINER_ID: ${GTM_CONTAINER_ID}`);

export function GoogleTagManagerScriptBody() {
    return (
        <>
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
                height="0"
                width="0"
                style={{display: 'none', visibility: 'hidden'}}
            >
            </iframe>
        </noscript>
        </>
    );
}

export function GoogleTagManagerScriptHead() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_CONTAINER_ID}');`
            }}
        />
    );
}

// module.exports = {
//     GoogleTagManagerScriptHead: GoogleTagManagerScriptHead,
//     GoogleTagManagerScriptBody: GoogleTagManagerScriptBody,
// };
