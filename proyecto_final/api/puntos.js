var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Punto = require("../schemas/punto.js");

router.get('/', function(req, res) {
    Punto.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var puntoNuevo = new Punto({
      _id: new mongoose.Types.ObjectId(),
      valor: req.body.valor,
      punto: req.body.punto,
    });
  
    puntoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var valor = req.body.valor;
    var punto = req.body.punto;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Punto.findOneAndUpdate({_id: _id}, {$set:{valor:valor, punto:punto}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

module.exports=router;