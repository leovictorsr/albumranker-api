const spotify_api = require('spotify-web-api-node');
const express = require('express');

const config = require('./config.json');

const api = new spotify_api({
    clientId: config['client_id'],
    clientSecret: config['client_secret']
});
const spotify = express.Router();

async function search_album(req, res) {
    let album = req.params.album;

    api.searchAlbums(album).then((data) => {
        console.log(data.body);
        res.send(data.body);
    });
}

async function search_artist(req, res) {
    let artist = req.params.artist;

    api.searchAlbums(`artist:${artist}`).then((data) => {
        console.log(data.body);
        res.send(data.body);
    });
}

spotify.get('/album/:album', search_album);
spotify.get('/artist/:artist', search_artist);

api.clientCredentialsGrant().then((data) => {
    api.setAccessToken(data.body['access_token']);
});

module.exports = spotify;