const express = require('express');
const next = require('next');

const LLU_WWW_ADDRESS = process.env.LLU_WWW_ADDRESS || "127.0.0.1";
const LLU_WWW_PORT = process.env.LLU_WWW_PORT || 3100;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    server.get('/content/:contentPagePath', (req, res) => {
        return app.render(req, res, '/content', { contentPagePath: req.params.contentPagePath })
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(LLU_WWW_PORT, LLU_WWW_ADDRESS, err => {
        if (err) throw err;
        console.log(`NodeJS Web App listening at ${LLU_WWW_ADDRESS}:${LLU_WWW_PORT}.`)
    })

});
