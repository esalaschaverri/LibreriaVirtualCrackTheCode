const path = require('path');
var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");
var formidable = require('formidable');
const fs = require("fs");
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

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
  var idUsuario = req.body.idUsuario;
  Usuario.findById({_id:idUsuario}).exec()
    .then(
      function (result) {
        res.json(result);
      }
    );
    
});


// router.get('/login', function (req, res) {
// // mostrar el formulario de login
//   return res.redirect('../iniciar_sesion.html');
// });


router.post('/login', async function (req, res) {
  var correo = req.body.correo;
  var contrasena = req.body.clave;
  var cliente = await Usuario.findOne({correo:correo}).exec()
      .then(
          function (result) {
            //res.json(result);
            return result;
          }
      );
  var clienteId = cliente._id;
  var clienteCorreo = cliente.correo;
  var clienteContrasena = cliente.contrasena;

  const validarContrasena = clienteContrasena == contrasena;

  if (validarContrasena) {
    req.session.isAuth = true;
    req.session.username = clienteCorreo;
    return res.redirect('../perfil_cliente.html?id=' + clienteId);
  }
  else {
    req.session.error = "Invalid Credentials";
    return res.redirect('../iniciar_sesion.html');
  }


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
  // findOneAndUpdate - Filtro - Valores - Opciones - Funci�n an�nima
  Usuario.findOneAndUpdate({ _id: _id }, { $set: { nombre: nombre, apellidos: apellidos, genero: genero, numeroCedula: numeroCedula, tipoCedula: tipoCedula, provincia: provincia, canton: canton, distrito: distrito, direccion: direccion, latitud: latitud, longitud: longitud,fotoPerfil: fotoPerfil,correo: correo,contrasena: contrasena } }, { useFindAndModify: false, new: true }, function (err, doc) {
    res.json(doc);
  });
});

router.post('/crear', function (req, res) {
  var form = new formidable.IncomingForm();
  var _id = new mongoose.Types.ObjectId();
  form.parse(req, function (err, fields, files) {

    var usuarioNuevo = new Usuario({
      _id: _id,
      nombre: fields.nombre,
      apellidos: fields.apellidos,
      genero: fields.genero,
      numeroCedula: fields.cedula,
      tipoCedula: fields.tipoCedula,
      provincia: fields.provincia,
      canton: fields.canton,
      distrito: fields.distrito,
      direccion: fields.direccion,
      //latitud: document.getElementById("direccion").value,
      //longitud: document.getElementById("direccion").value,
      latitud: 88,
      longitud: 10,
      fotoPerfil: files.upload.newFilename,
      correo: fields.email,
      contrasena: fields.password
    })

    usuarioNuevo.save()
    const path = require('path');
    var oldpath = files.upload.filepath;
    var newpath = require('path').join(__dirname, '../public','img', files.upload.newFilename);

    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
    });
  });
  return res.redirect('../perfil_cliente.html?id=' + _id);
});

module.exports = router;
