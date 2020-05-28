const spotify_api = require('spotify-web-api-node');
const express = require('express');

const config = require('./config.json');

const api = new spotify_api({
    clientId: config['client_id'],
    clientSecret: config['client_secret']
});
const spotify = express.Router();

function make_album_data(album) {
    return {
        "name": album.name,
        "artist": album.artists[0].name,
        "spotify_id": album.id,
        "image_url": album.images[0].url
    }
}

async function search_album(req, res) {
    let album = req.params.album;

    api.searchAlbums(album).then((data) => {
        let albums = new Array();

        data.body.albums.items.map((a) => albums.push(make_album_data(a)));
        res.send(albums);
        return albums;
    }).catch((err) => console.log(err));
}

async function search_artist(req, res) {
    let artist = req.params.artist;

    api.searchAlbums(`artist:${artist}`).then((data) => {
        let albums = new Array();

        data.body.albums.items.map((a) => albums.push(make_album_data(a)));
        res.send(albums);
        return albums;
    }).catch((err) => console.log(err));
}

spotify.get('/album/:album', search_album);
spotify.get('/artist/:artist', search_artist);

api.clientCredentialsGrant().then((data) => {
    api.setAccessToken(data.body['access_token']);
    return data.body['access_token'];
}).catch((err) => console.log(err));

module.exports = spotify;