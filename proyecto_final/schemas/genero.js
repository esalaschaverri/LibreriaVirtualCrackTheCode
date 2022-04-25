var mongoose = require("mongoose");

var generoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,
    codigo : String,
});

module.exports = mongoose.model("Genero", generoSchema, "Generos");