const spotify_api = require('spotify-web-api-node');
const express = require('express');

const config = require('./config.json');

const api = new spotify_api({
    clientId: config['client_id'],
    clientSecret: config['client_secret']
});
const spotify = express.Router();

async function search_album(album) {
    api.searchAlbums(album).then((data) => {
        console.log(data.body);
    });
}

async function search_artist(artist) {
    api.searchAlbums(`artist:${artist}`).then((data) => {
        console.log(data.body);
    });
}

spotify.get('/album', search_album);
spotify.get('/artist', search_artist);

api.clientCredentialsGrant().then((data) => {
    api.setAccessToken(data.body['access_token']);
});

module.exports = spotify;