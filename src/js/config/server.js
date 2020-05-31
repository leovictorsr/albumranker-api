const port = 4000;

const body_parser = require("body-parser");
const express = require("express");
const server = express();

server.use(body_parser.urlencoded({extended: true}));
server.use(body_parser.json());

server.listen(process.env.PORT || port, () => {
    console.log("Listening on ");
});

module.exports = server;
