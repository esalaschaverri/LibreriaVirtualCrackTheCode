var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Socio = require("../schemas/socio.js");

router.get('/', function(req, res) {
    Socio.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;