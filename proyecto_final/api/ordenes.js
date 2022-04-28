var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Orden = require("../schemas/orden.js");

router.get('/', function(req, res) {
    Orden.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });


  router.post('/insertar', function (req, res) {
    var ordenNuevo = new Orden({
      _id: new mongoose.Types.ObjectId(),
      numeroOrden: req.body.numeroOrden,
      fecha: req.body.fecha,
      id_Usuario: req.body.id_Usuario,
      nombre: req.body.nombre,
      libros: req.body.libros,
      total: req.body.total,
    });
  
    ordenNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

module.exports=router;