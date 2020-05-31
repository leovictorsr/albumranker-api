const Ranking = require("../items/ranking");

Ranking.methods(["get", "post", "put", "delete"]);
Ranking.updateOptions({new: true, runValidators: true});

module.exports = Ranking;
