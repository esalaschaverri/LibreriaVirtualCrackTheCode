var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Usuario = require("../schemas/usuario.js");

router.get('/', function(req, res) {
    Usuario.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

router.post('/buscar', function (req, res) {
  var numeroCedula = req.body.numeroCedula;
  Usuario.find({numeroCedula:numeroCedula}).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
    
});

router.post('/insertar', function (req, res) {
  var usuarioNuevo = new Usuario({
    _id: new mongoose.Types.ObjectId(),
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    genero: req.body.genero,
    numeroCedula: req.body.numeroCedula,
    tipoCedula: req.body.tipoCedula,
    provincia: req.body.provincia,
    canton: req.body.canton,
    distrito: req.body.distrito,
    direccion: req.body.direccion,
    latitud: req.body.latitud,
    longitud: req.body.longitud,
    fotoPerfil: req.body.fotoPerfil,
    correo: req.body.correo,
    contrasena: req.body.contrasena,
  });

  usuarioNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function (req, res) {
  var _id = req.body._id;
  var nombre = req.body.nombre;
  var apellidos = req.body.apellidos;
  var genero = req.body.genero;
  var numeroCedula = req.body.numeroCedula;
  var tipoCedula = req.body.tipoCedula;
  var provincia = req.body.provincia;
  var canton = req.body.canton;
  var distrito = req.body.distrito;
  var direccion = req.body.direccion;
  var latitud = req.body.latitud;
  var longitud = req.body.longitud;
  var fotoPerfil = req.body.fotoPerfil;
  var correo = req.body.correo;
  var contrasena = req.body.contrasena;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Usuario.findOneAndUpdate({ _id: _id }, { $set: { nombre: nombre, apellidos: apellidos, genero: genero, numeroCedula: numeroCedula, tipoCedula: tipoCedula, provincia: provincia, canton: canton, distrito: distrito, direccion: direccion, latitud: latitud, longitud: longitud,fotoPerfil: fotoPerfil,correo: correo,contrasena: contrasena } }, { useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);
  });
});

module.exports = router;
