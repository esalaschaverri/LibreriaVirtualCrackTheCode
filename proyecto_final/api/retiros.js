var express =require("express");
var router=express.Router();
var mongoose = require("mongoose");

var Retiro = require("../schemas/retiro.js");

router.get('/', function(req, res) {
    Retiro.find().exec()
      .then(
        function(result) {
          res.json(result);
        }
      );
  });

module.exports=router;