var mongoose = require("mongoose");

var autorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombreCompleto : String,
    paisNacimiento : String,
    fechaNacimiento : Date,
    fechaDefuncion : Date,
    genero : String,
    librosPublicados : String,
    premios : String,
    nobelFecha : Date,
    imagen : String,
});

module.exports = mongoose.model("Autor", autorSchema, "Autores");