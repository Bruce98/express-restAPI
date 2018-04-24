
var mongoose = require('./db.js')

var Schema   = mongoose.Schema;

var BearSchema = new Schema({
    username: String,
    password: String

});

module.exports = mongoose.model('barlists', BearSchema);