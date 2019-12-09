const dotEnvFlow = require('dotenv-flow').config();

module.exports = {
    publicRuntimeConfig: {
        LLU_API_URL: process.env.LLU_API_URL,
        GA_MEASUREMENT_ID: process.env.GA_MEASUREMENT_ID
    }
};
