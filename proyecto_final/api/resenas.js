var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Resena = require("../schemas/resena.js");

router.get('/', function(req, res) {
    Resena.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;