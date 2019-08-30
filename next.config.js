const dotEnvFlow = require('dotenv-flow').config();

module.exports = {
    publicRuntimeConfig: {
        LLU_API_URL: process.env.LLU_API_URL,
    }
};
