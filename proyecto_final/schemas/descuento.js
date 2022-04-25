var mongoose = require("mongoose");

var descuentoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombreDescuento : String,
    porcentaje : Number,
});

module.exports = mongoose.model("Descuento", descuentoSchema, "Descuentos");