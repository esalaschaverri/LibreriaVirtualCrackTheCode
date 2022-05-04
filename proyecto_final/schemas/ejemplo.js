var mongoose = require("mongoose");

var autorSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numeroOrden : String,
    fecha : Date,
    item : String,
    genero : String,
    cantidad : Number,
    puntoRetiro : String,
});

module.exports = mongoose.model("Ejemplo", autorSchema, "Ejemplos");