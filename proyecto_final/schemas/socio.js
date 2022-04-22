var mongoose = require("mongoose");

var socioSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre : String,
    foto : String,
    fecha : Date,
});

module.exports = mongoose.model("Socio", socioSchema, "Socios");