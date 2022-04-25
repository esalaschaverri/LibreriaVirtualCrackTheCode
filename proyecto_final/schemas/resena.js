var mongoose = require("mongoose");

var resenaSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    resena : String,
    idAutor : String,
});

module.exports = mongoose.model("Resena", resenaSchema, "Resenas");