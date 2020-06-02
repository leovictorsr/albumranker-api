const spotify_api = require('spotify-web-api-node');
const express = require('express');

const config = require('./config.json');

const api = new spotify_api({
    clientId: config['client_id'],
    clientSecret: config['client_secret']
});
const spotify = express.Router();

function convert_duration(millis) {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return (seconds === 60 ? (minutes+1) + ":00" : minutes + ":" + (seconds < 10 ? "0" : "") + seconds);
  }
  
function make_album_data(album) {
    return {
        "name": album.name,
        "artist": album.artists[0].name,
        "spotify_id": album.id,
        "image_url": album.images[0].url
    }
}

function make_complete_album_data(album) {
    return {
        "name": album.name,
        "artists": album.artists.map(artist => artist.name),
        "spotify_id": album.id,
        "image_url": album.images[0].url,
        "tracks": album.tracks.items.map(track => {
            return {
                "name": track.name,
                "duration": convert_duration(track.duration_ms),
                "track_number": track.track_number,
            }
        })
    }
}

async function get_album(req, res) {
    let id = req.params.id;

    api.getAlbum(id).then((data) => {
        let album = make_complete_album_data(data.body);
        return res.status(200).send(album);
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    })
}

async function search_album(req, res) {
    let album = req.params.album;

    api.searchAlbums(album).then((data) => {
        let albums = new Array();

        data.body.albums.items.map((a) => albums.push(make_album_data(a)));
        return res.status(200).send(albums);
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    });
}

async function search_artist(req, res) {
    let artist = req.params.artist;

    api.searchAlbums(`artist:${artist}`).then((data) => {
        let albums = new Array();

        data.body.albums.items.map((a) => albums.push(make_album_data(a)));
        return res.status(200).send(albums);
    }).catch((err) => {
        console.log(err);
        return res.status(500).send(err);
    });
}

spotify.get('/album/:album', search_album);
spotify.get('/fullalbum/:id', get_album);
spotify.get('/artist/:artist', search_artist);

api.clientCredentialsGrant().then((data) => {
    api.setAccessToken(data.body['access_token']);
    return data.body['access_token'];
}).catch((err) => console.log(err));

module.exports = spotify;