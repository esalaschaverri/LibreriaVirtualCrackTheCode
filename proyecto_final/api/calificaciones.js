var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Calificacion = require("../schemas/calificacion.js");

router.get('/', function(req, res) {
    Calificacion.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;