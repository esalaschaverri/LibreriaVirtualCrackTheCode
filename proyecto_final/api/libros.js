var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var formidable = require('formidable');
const fs = require("fs");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

var Libro = require("../schemas/libro.js");

router.get('/', function (req, res) {
  Libro.find().exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
});

router.post('/buscarlibro', function (req, res) {
  var titulo = req.body.titulo;
  Libro.find({titulo:titulo}).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
    
});

router.post('/buscar', function (req, res) {
  var idUsuario = req.body.idUsuario;
  Libro.findById(idUsuario).exec()
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
    id_autor: req.body.id_autor,
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
  id_autor: req.body.id_autor;
  // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
  Libro.findOneAndUpdate({ _id: _id }, { $set: { titulo: titulo, autor: autor, editorial: editorial, genero: genero, premios: premios, identificacion: identificacion, precio: precio, sinopsis: sinopsis, imagen: imagen } }, { useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);
  });
});

router.post('/crear', function (req, res) {
  var form = new formidable.IncomingForm();
  var _id = new mongoose.Types.ObjectId();
  form.parse(req, function (err, fields, files) {

    var libroNuevo = new Libro({
      _id: _id,
      titulo: fields.titulo,
      autor: fields.autor,
      id_autor: fields.idautor,
      editorial: fields.editorial,
      genero: fields.genero,
      premios: fields.premios,
      identificacion: fields.identificacion,
      precio: fields.precio,
      sinopsis: fields.sinopsis,
      imagen: files.upload.newFilename,
    })

    libroNuevo.save()
    const path = require('path');
    var oldpath = files.upload.filepath;
    var newpath = require('path').join(__dirname, '../public','img', files.upload.newFilename);

    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
    });
  });
  return res.redirect('../catalogo_libros.html');
});

module.exports = router;


