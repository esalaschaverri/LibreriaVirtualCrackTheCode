var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Frecuente = require("../schemas/frecuente.js");

router.get('/', function(req, res) {
    Frecuente.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var frecuenteNuevo = new Frecuente({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      correo: req.body.correo,
    });
  
    frecuenteNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  module.exports=router;