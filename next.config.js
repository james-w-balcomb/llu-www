const dotEnvFlow = require('dotenv-flow').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    publicRuntimeConfig: {
        LLU_API_URL: process.env.LLU_API_URL,
        GTM_CONTAINER_ID: process.env.GTM_CONTAINER_ID,
    }
});
