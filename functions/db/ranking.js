const express = require('express');
const firebase = require('firebase/app');
const config = require('./config');
require('firebase/database');

firebase.initializeApp(config);
const db = firebase.database();

const ranking = express.Router();
ranking.use(express.json());

function del(req, res) {

}

function get(req, res) {
  let user = req.params.user;
  console.log(user);

  db.ref('ranking').orderByChild('user').equalTo(user).once('value').then((data) => {
    console.log(data.val());
    res.send(data.val());
    return data.val();
  }).catch((err) => console.log(err));
}

function post(req, res) {
  let r = db.ref('ranking').push();

  r.set({
    artist: req.body.artist,
    album: req.body.album,
    user: req.body.user,
    songs: req.body.songs,
    date: Date.now()
  });

  res.send(r);
}

function put(req, res) {
  db.ref('ranking')
    .orderByChild('user').equalTo(req.body.user)
    .set({
      artist: req.body.artist,
      album: req.body.album,
      user: req.body.user,
      songs: req.body.songs,
      date: Date.now()
    });

  res.send(r);
}

async function get_all(req, res) {
  db.ref('ranking').once('value').then((data) => {
    console.log(data.val());
    res.send(data.val());
    return data.val();
  }).catch((err) => console.log(err));
}

ranking.get('/ranking', get_all);
ranking.get('/ranking/:user', get);

ranking.post('/ranking', post);
ranking.put('/ranking', put);
ranking.delete('/ranking', del);

module.exports = ranking;
