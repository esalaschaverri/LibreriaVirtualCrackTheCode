var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Retiro = require("../schemas/retiro.js");

router.get('/', function (req, res) {
  Retiro.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/insertar', function (req, res) {
  var retiroNuevo = new Retiro({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    direccion: req.body.direccion,
  });

  retiroNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function(req, res) {
  var _id = req.body._id;
  var nombre = req.body.nombre;
  var direccion = req.body.direccion;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Retiro.findOneAndUpdate({_id: _id}, {$set:{nombre:nombre, direccion:direccion}}, {useFindAndModify: false, new: true}, function (err, doc) {
    res.json(doc);
  });
});

module.exports = router;