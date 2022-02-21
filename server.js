const express = require('express')
const routes = require('./routes')
const config = require('./config');
const app = express();

app.use(express.json());
routes(app);

app.use(function(req, res) {
    res.status(404).send({ host: `${req.host}`, url: `${req.originalUrl}`, method: `${req.method}`, message: 'not found'})
  });

app.listen(config.api.port, () => {
    console.log(`Express server listening on port ${config.api.port}`)
})
