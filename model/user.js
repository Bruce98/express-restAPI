
var mongoose = require('./db.js')

var Schema   = mongoose.Schema;

var BearSchema = new Schema({
    name: String,
    password: String

});

module.exports = mongoose.model('barlists', BearSchema);