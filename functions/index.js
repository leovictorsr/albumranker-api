const functions = require('firebase-functions');
const express = require('express');

const spotify = require('./spotify');
const ranking = require('./db/ranking');

const app = express();

app.use('/spotify', spotify);
app.use('/', ranking);

app.listen();

exports.albumranker = functions.https.onRequest(app);
