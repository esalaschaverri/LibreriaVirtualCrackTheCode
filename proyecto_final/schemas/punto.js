var mongoose = require("mongoose");

var puntoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    valor : String,
    punto : String,
});

module.exports = mongoose.model("Punto", puntoSchema, "Puntos");