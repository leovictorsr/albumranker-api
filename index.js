const express = require('express');

const spotify = require('./spotify');

const app = express();

app.use('/spotify', spotify);

app.listen(3000, () => console.log('Listening on port 3000...'));