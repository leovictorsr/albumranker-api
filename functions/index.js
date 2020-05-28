const functions = require('firebase-functions');
const express = require('express');

const spotify = require('./spotify');
const ranking = require('./db/ranking');

const app = express();

app.use('/spotify', spotify);
app.use('/', ranking);

app.listen(3000, () => console.log('Listening on port 3000...'));

exports.albumranker = functions.https.onRequest(app);
