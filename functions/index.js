const cors = require('cors');
const express = require('express');
const functions = require('firebase-functions');

const spotify = require('./spotify');
const ranking = require('./db/ranking');

const app = express();

spotify.options('*', cors());
ranking.options('*', cors());
app.use(cors())
app.options('*', cors())

app.use('/spotify', spotify);
app.use('/', ranking);

app.listen();

exports.albumranker = functions.https.onRequest(app);
