var mongoose = require("mongoose");

var tarjetaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tipoTarjeta : String,
    numeroTarjeta : Number,
    nombre : String,
    codigoVerificacion : Number,
    idUsuario : String,
    anoExp : Number,
});

module.exports = mongoose.model("Tarjeta", tarjetaSchema, "Tarjetas");