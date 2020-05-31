const functions = require('firebase-functions');
const express = require('express');

const spotify = require('./spotify');
const ranking = require('./db/ranking');

const app = express();

spotify.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});
ranking.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});


app.use('/spotify', spotify);
app.use('/', ranking);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.listen();

exports.albumranker = functions.https.onRequest(app);
