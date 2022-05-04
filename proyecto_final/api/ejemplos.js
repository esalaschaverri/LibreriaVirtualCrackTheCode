var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Ejemplo = require("../schemas/ejemplo.js");

router.get('/', function(req, res) {
    Ejemplo.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function(req, res) {
    var ejemploNuevo = new Ejemplo({
      _id: new mongoose.Types.ObjectId(),
      numeroOrden: req.body.numeroOrden,
      fecha: req.body.fecha,
      item: req.body.item,
      genero: req.body.genero,
      cantidad: req.body.cantidad,
      puntoRetiro: req.body.puntoRetiro,
    });
  
    ejemploNuevo.save()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var numeroOrden = req.body.numeroOrden;
    var fecha = req.body.fecha;
    var item = req.body.item;
    var genero = req.body.genero;
    var cantidad = req.body.cantidad;
    var puntoRetiro = req.body.puntoRetiro;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Ejemplo.findOneAndUpdate({_id: _id}, {$set:{numeroOrden:numeroOrden, fecha:fecha, item:item, genero:genero, cantidad:cantidad, puntoRetiro:puntoRetiro}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

module.exports=router;