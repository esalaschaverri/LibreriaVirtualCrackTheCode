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

module.exports=router;