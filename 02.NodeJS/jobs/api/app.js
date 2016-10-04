'use strict';

require('./init-database');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Config Middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Config Routes
app.use(require('./routes/company-route'));
app.use(require('./routes/user-route'));

module.exports = app;