const restful = require("node-restful");
const mongoose = restful.mongoose;

const ranking = new mongoose.Schema({
    handle: {type: String, required: true},
    album: {type: String, required: true},
    artist: {type: String, required: true}
});

module.exports = restful.model("ranking", ranking);
