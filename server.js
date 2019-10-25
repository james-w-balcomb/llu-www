const express = require('express');
const next = require('next');

const port = parseInt(process.env.LLU_WWW_PORT, 10);
const dev = process.env.NODE_ENV !== 'production';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {

    const server = express();

    // server.get('/posts/:id', (req, res) => {
    //     return app.render(req, res, '/posts', { id: req.params.id })
    // });
    //
    // server.get('/contents/:id', (req, res) => {
    //     return app.render(req, res, '/contents', { id: req.params.id })
    // });

    server.get('/content/:contentPagePath', (req, res) => {
        return app.render(req, res, '/content', { contentPagePath: req.params.contentPagePath })
    });

    server.all('*', (req, res) => {
        return handle(req, res)
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`)
    })

});
