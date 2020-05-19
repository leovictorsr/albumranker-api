const express = require('express');
const config = require('./config.json');

const spotify = express();

let token = "";

function connect() {
    let url = config['token_endpoint'];
    let grant_type = 'client_credentials';
    let authorization = new Buffer(config['authorization']).toString('base64');

    fetch(url, {
        method: 'POST',
        body: `grant_type: ${grant_type}`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Authorization ${authorization}`
        },
    }).then((data) => token = data.access_token);
}

function search_album(album) {
    let url = new URL(config['search_endpoint']);
    let params = {
        'q': `q=album:${album}`,
        'type': 'album',
        'market': 'US'
    }
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Authorization ${token}`
        }
    }).then((data) => {
        return data.albums.items;
    });
}

function search_artist(artist) {
    let url = new URL(config['search_endpoint']);
    let params = {
        'q': `q=artist:${artist}`,
        'type': 'album',
        'market': 'US'
    }
    url.search = new URLSearchParams(params).toString();

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Authorization ${token}`
        }
    }).then((data) => {
        return data.albums.items;
    });
}

spotify.get('/spotify/album', search_album);
spotify.get('/spotify/artist', search_artist);
spotify.get('/spotify/connect', connect);

module.exports = spotify;