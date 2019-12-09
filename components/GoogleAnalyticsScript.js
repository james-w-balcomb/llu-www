import React from 'react';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();
const GA_MEASUREMENT_ID = publicRuntimeConfig.GA_MEASUREMENT_ID;
console.log(`GA_MEASUREMENT_ID: ${GA_MEASUREMENT_ID}`);

export function GoogleAnalyticsScript() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');ga('create', '${GA_MEASUREMENT_ID}', 'auto');ga('send', 'pageview');`
            }}
        />
    );
}

export function GoogleAnalyticsScriptAsynchronousCreateCommandAndQueue() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;ga('create', '${GA_MEASUREMENT_ID}', 'auto');ga('send', 'pageview');`
            }}
        />
    );
}

export function GoogleAnalyticsScriptAsynchronousLoadLibrary() {
    return (
        <div
            dangerouslySetInnerHTML={{
                __html: `<script async src='https://www.google-analytics.com/analytics.js'></script>`
            }}
        />
    );
}

export function GoogleAnalyticsScriptAutotrack() {
    return (
        <script
            dangerouslySetInnerHTML={{
                __html: `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;ga('create', '${GA_MEASUREMENT_ID}', 'auto');ga('require', 'eventTracker');ga('require', 'outboundLinkTracker');ga('require', 'urlChangeTracker');ga('send', 'pageview');`
            }}
        />
    );
}

// module.exports = {
//     GoogleAnalyticsScript: GoogleAnalyticsScript,
//     GoogleAnalyticsScriptAsynchronousCreateCommandAndQueue: GoogleAnalyticsScriptAsynchronousCreateCommandAndQueue,
//     GoogleAnalyticsScriptAsynchronousLoadLibrary: GoogleAnalyticsScriptAsynchronousLoadLibrary,
// };
