var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

var Libro = require("../schemas/libro.js");

router.get('/', function (req, res) {
  Libro.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/buscar', function (req, res) {
  var _id = req.body._id;
  Libro.findById(_id).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/insertar', function (req, res) {
  var libroNuevo = new Libro({
    _id: new mongoose.Types.ObjectId(),
    titulo: req.body.titulo,
    autor: req.body.autor,
    editorial: req.body.editorial,
    genero: req.body.genero,
    premios: req.body.premios,
    identificacion: req.body.identificacion,
    precio: req.body.precio,
    sinopsis: req.body.sinopsis,
    imagen: req.body.imagen,
  });

  libroNuevo.save()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/actualizar', function (req, res) {
  var _id = req.body._id;
  var titulo = req.body.titulo;
  var autor = req.body.autor;
  var editorial = req.body.editorial;
  var genero = req.body.genero;
  var premios = req.body.premios;
  var identificacion = req.body.identificacion;
  var precio = req.body.precio;
  var sinopsis = req.body.sinopsis;
  var imagen = req.body.imagen;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Libro.findOneAndUpdate({ _id: _id }, { $set: { titulo: titulo, autor: autor, editorial: editorial, genero: genero, premios: premios, identificacion: identificacion, precio: precio, sinopsis: sinopsis, imagen: imagen } }, { useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);
  });
});

module.exports = router;
