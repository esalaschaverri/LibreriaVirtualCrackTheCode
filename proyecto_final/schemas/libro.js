var mongoose = require("mongoose");

var libroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    titulo : String,
    autor : String,
    editorial : String,
    genero : String,
    premios : String,
    identificacion : String,
    precio : Number,
    sinopsis : String,
    imagen : String,
    id_autor : String,
});

module.exports = mongoose.model("Libro", libroSchema, "Libros");