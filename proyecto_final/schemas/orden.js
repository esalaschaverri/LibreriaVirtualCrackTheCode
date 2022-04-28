var mongoose = require("mongoose");

var ordenSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    numeroOrden : String,
    fecha : Date,
    id_Usuario : String,
    nombre : String,
    libros : String,
    total : Number,
});

module.exports = mongoose.model("Orden", ordenSchema, "Ordenes");