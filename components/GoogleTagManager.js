// import React from 'react';
// import getConfig from 'next/config'
//
// const { publicRuntimeConfig } = getConfig();
// const GTM_CONTAINER_ID = publicRuntimeConfig.GTM_CONTAINER_ID;
//
// export const GtmScript = () => {
//     function intercept() {
//         const qs = document.querySelector("#gtm-js");
//         if (qs !== null) {
//             qs.addEventListener("load", () => {
//                 console.log("GTM loaded");
//             });
//         }
//     }
//
//     return (
//         <>
//             <script
//                 id="gtm-js"
//                 async
//                 src={`https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`}
//             />
//             <script
//                 dangerouslySetInnerHTML={{
//                     __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GTM_CONTAINER_ID}');
//             (${intercept.toString()})()
//             `
//                 }}
//             />
//         </>
//     );
// };
//
// const style = {
//     display: "none",
//     visibility: "hidden"
// };
// export const GtmNoscript = props => (
//     <>
//         <noscript>
//             <iframe
//                 src={`https://www.googletagmanager.com/ns.html?id=${GTM_CONTAINER_ID}`}
//                 height="0"
//                 width="0"
//                 style={style}
//             />
//         </noscript>
//     </>
// );
