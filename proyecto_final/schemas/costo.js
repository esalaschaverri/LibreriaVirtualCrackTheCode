var mongoose = require("mongoose");

var costoSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    canton : String,
    costo : Number,
});

module.exports = mongoose.model("Costo", costoSchema, "Costos");