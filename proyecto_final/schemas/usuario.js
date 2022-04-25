var mongoose = require("mongoose");

var usuarioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,
    apellidos : String,
    genero : String,
    numeroCedula : Number,
    tipoCedula : String,
    provincia : String,
    canton : String,
    distrito : String,
    direccion : String,
    latitud : Number,
    longitud : Number,
    fotoPerfil : String,
    correo : String,
    contrasena : String,
});

module.exports = mongoose.model("Usuario", usuarioSchema, "Usuarios");