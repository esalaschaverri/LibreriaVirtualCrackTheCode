var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");
var formidable = require('formidable');
const fs = require("fs");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

var Autor = require("../schemas/autor.js");

router.get('/', function(req, res) {
    Autor.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/buscar', function (req, res) {
    var idUsuario = req.body.idUsuario;
    Autor.findById(idUsuario).exec()
      .then(
        function (result) {
          res.json(result);
        }
      );
      
  });

  router.post('/insertar', function(req, res) {
    var autorNuevo = new Autor({
      _id: new mongoose.Types.ObjectId(),
      nombreCompleto: req.body.nombreCompleto,
      paisNacimiento: req.body.paisNacimiento,
      fechaNacimiento: req.body.fechaNacimiento,
      fechaDefuncion: req.body.fechaDefuncion,
      genero: req.body.genero,
      librosPublicados: req.body.librosPublicados,
      premios: req.body.premios,
      nobelFecha: req.body.nobelFecha,
      imagen: req.body.imagen,      
      resena: req.body.resena,      
    });
  
    autorNuevo.save()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

  router.post('/actualizar', function(req, res) {
    var _id = req.body._id;
    var nombreCompleto = req.body.nombreCompleto;
    var paisNacimiento = req.body.paisNacimiento;
    var fechaNacimiento = req.body.fechaNacimiento;
    var fechaDefuncion = req.body.fechaDefuncion;
    var genero = req.body.genero;
    var librosPublicados = req.body.librosPublicados;
    var premios = req.body.premios;
    var nobelFecha = req.body.nobelFecha;
    var imagen = req.body.imagen;
    var resena = req.body.resena;
    // findOneAndUpdate - Filtro - Valores - Opciones - Función anónima
    Autor.findOneAndUpdate({_id: _id}, {$set:{nombreCompleto:nombreCompleto, paisNacimiento:paisNacimiento, fechaNacimiento:fechaNacimiento, fechaDefuncion:fechaDefuncion, genero:genero, librosPublicados:librosPublicados, premios:premios, nobelFecha:nobelFecha, imagen:imagen, resena:resena}}, {useFindAndModify: false, new: true}, function (err, doc) {
      res.json(doc);
    });
  });

  router.post('/crear', function (req, res) {
    var form = new formidable.IncomingForm();
    var _id = new mongoose.Types.ObjectId();
    form.parse(req, function (err, fields, files) {
  
      var autorNuevo = new Autor({
        _id: _id,
        nombreCompleto: fields.nombreCompleto,
        paisNacimiento: fields.paisNacimiento,
        fechaNacimiento: fields.fechaNacimiento,
        fechaDefuncion: fields.fechaDefuncion,
        genero: fields.genero,
        librosPublicados: fields.librosPublicados,
        premios: fields.premios,
        nobelFecha: fields.nobelFecha,
        imagen: files.upload.newFilename,
        resena: fields.resena,
      })
  
      autorNuevo.save()
      const path = require('path');
      var oldpath = files.upload.filepath;
      var newpath = require('path').join(__dirname, '../public','img', files.upload.newFilename);
  
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
      });
    });
    return res.redirect('../catalogo_autores.html');
  });

module.exports=router;