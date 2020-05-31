const express = require("express");

module.exports = ((server) => {
    const router = express.Router();

    server.use("/api", router);

    const ranking_service = require("../items/ranking_service");
    item_service.register(router, "/ranking");
});
