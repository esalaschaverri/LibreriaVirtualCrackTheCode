var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Contacto = require("../schemas/contacto.js");

router.get('/', function(req, res) {
    Contacto.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var contactoNuevo = new Contacto({
      _id: new mongoose.Types.ObjectId(),
      nombreCompleto: req.body.nombreCompleto,
      correo: req.body.correo,
      mensaje: req.body.mensaje,
    });
  
    contactoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  module.exports=router;