var mongoose = require("mongoose");

var retiroSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,
    direccion : String,
});

module.exports = mongoose.model("Retiro", retiroSchema, "Retiros");