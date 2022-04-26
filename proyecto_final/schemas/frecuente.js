var mongoose = require("mongoose");

var frecuenteSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,
    apellidos : String,
    correo : String,
});

module.exports = mongoose.model("Frecuente", frecuenteSchema, "Frecuentes");