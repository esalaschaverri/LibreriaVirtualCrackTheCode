var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Costo = require("../schemas/costo.js");

router.get('/', function(req, res) {
    Costo.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/insertar', function (req, res) {
    var costoNuevo = new Costo({
      _id: new mongoose.Types.ObjectId(),
      canton: req.body.canton,
      costo: req.body.costo,
    });
  
    costoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var canton = req.body.canton;
    var costo = req.body.costo;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Costo.findOneAndUpdate({_id: _id}, {$set:{canton:canton, costo:costo}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

module.exports=router;