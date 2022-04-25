var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Tarjeta = require("../schemas/tarjeta.js");

router.get('/', function(req, res) {
    Tarjeta.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;