var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Autor = require("../schemas/autor.js");

router.get('/', function(req, res) {
    Autor.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;