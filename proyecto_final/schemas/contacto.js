var mongoose = require("mongoose");

var contactoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombreCompleto : String,
    correo : String,
    mensaje : String,
});

module.exports = mongoose.model("Contacto", contactoSchema, "Contactos");