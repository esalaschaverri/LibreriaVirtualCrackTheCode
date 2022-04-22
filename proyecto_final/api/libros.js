var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Libro = require("../schemas/libro.js");

router.get('/', function(req, res) {
    Libro.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;
