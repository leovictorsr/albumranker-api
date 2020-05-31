const restful = require("node-restful");
const mongoose = restful.mongoose;

const track = new mongoose.Schema({
    name: {type: String, required: true},
    duration: {type: String, required: true},
    track_number: {type: Integer, required: true},
    order: {type: Integer, required: true},
});

module.exports = restful.model("Track", track);
