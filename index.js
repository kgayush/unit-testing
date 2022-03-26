const express = require('express');
const mwBasicAuth = require('./middleware/basicAuth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 8080;
const routesController = require('./routes')();

app.use(mwBasicAuth);
app.use('/', routesController)

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});