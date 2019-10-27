const dotEnvFlow = require('dotenv-flow').config();
const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    publicRuntimeConfig: {
        LLU_API_URL: 'http://localhost:3300',
    },

    webpack: config => {
        // Fixes npm packages that depend on `fs` module
        config.node = {
            fs: 'empty'
        };

        config.module.rules.push({
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        });

        return config
    }
})