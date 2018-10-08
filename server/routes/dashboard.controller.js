var mysql      = require('mysql');
var _          = require('lodash');
var url = require('../../config/config').mysql;
url["multipleStatements"] =true
var connection = mysql.createConnection(url);
var async = require('async');

module.exports= {

  login: function(req,res){
    console.log("-------node side hitting---------")
   data=req.body;
   console.log("--------here node ---------",data)

  }
}