(
    function(window, document, script, dataLayer, gtmContainerId) {

        window[dataLayer] = window[dataLayer] || [];

        window[dataLayer].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });

        let dl = dataLayer !== 'dataLayer' ? '&l=' + dataLayer : '';

        let f = document.getElementsByTagName(script)[0];

        let j = document.createElement(script);

        j.async = true;

        j.src = 'https://www.googletagmanager.com/gtm.js?id=' + gtmContainerId + dl;

        f.parentNode.insertBefore(j, f);

    }
)(
    window,
    document,
    'script',
    'dataLayer',
    'GTM-XXXX'
);
