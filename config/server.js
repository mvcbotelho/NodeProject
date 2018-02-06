const express = require('express');
const consign = require('consign');

let app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

consign()
    .include('app/routes')
    .then('config/db.js')
    .then('app/models')
    .into(app);

module.exports = app;