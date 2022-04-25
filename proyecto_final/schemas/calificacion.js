var mongoose = require("mongoose");

var calificacionSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    idUsuario : String,
    idLibro : String,
    nota : Number,
});

module.exports = mongoose.model("Calificacion", calificacionSchema, "Calificaciones");