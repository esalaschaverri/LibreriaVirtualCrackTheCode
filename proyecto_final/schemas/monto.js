var mongoose = require("mongoose");

var montoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    monto : Number,
    puntos : Number,
});

module.exports = mongoose.model("Monto", montoSchema, "Montos");