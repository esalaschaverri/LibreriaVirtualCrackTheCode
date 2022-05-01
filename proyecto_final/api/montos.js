var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Monto = require("../schemas/monto.js");

router.get('/', function(req, res) {
    Monto.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var montoNuevo = new Monto({
      _id: new mongoose.Types.ObjectId(),
      monto: req.body.monto,
      puntos: req.body.puntos,
    });
  
    montoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var monto = req.body.monto;
    var puntos = req.body.puntos;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Costo.findOneAndUpdate({_id: _id}, {$set:{monto:monto, puntos:puntos}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

module.exports=router;