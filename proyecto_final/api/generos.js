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

module.exports=router;