var mongoose = require("mongoose");

var libroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo : String,
    autor : String,
    genero : String,
    imagen : String,
    precio : Number,
    editorial : String,
    identificacion : String,
    premios : String,
    sinopsis : String,
});

module.exports = mongoose.model("Libro", libroSchema, "Libros");