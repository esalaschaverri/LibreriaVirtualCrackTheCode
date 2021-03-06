var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Genero = require("../schemas/genero.js");

router.get('/', function(req, res) {
    Genero.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });


  router.post('/insertar', function (req, res) {
    var generoNuevo = new Genero({
      _id: new mongoose.Types.ObjectId(),
      nombre: req.body.nombre,
      codigo: req.body.codigo,
    });
  
    generoNuevo.save()
      .then(
        function (result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var nombre = req.body.nombre;
    var codigo = req.body.codigo;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Genero.findOneAndUpdate({_id: _id}, {$set:{nombre:nombre, codigo:codigo}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

module.exports=router;