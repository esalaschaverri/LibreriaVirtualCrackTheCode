var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Descuento = require("../schemas/descuento.js");

router.get('/', function(req, res) {
    Descuento.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var descuentoNuevo = new Descuento({
      _id: new mongoose.Types.ObjectId(),
      nombreDescuento: req.body.nombreDescuento,
      porcentaje: req.body.porcentaje,
    });
  
    descuentoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var nombreDescuento = req.body.nombreDescuento;
    var porcentaje = req.body.porcentaje;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Descuento.findOneAndUpdate({_id: _id}, {$set:{nombreDescuento:nombreDescuento, porcentaje:porcentaje}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

module.exports=router;