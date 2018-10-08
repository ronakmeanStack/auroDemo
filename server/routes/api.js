var express = require('express');
var app = express.Router();
var dashboard= require('./dashboard.controller');

app.post('/login', function(req, res, next){

  dashboard.login(req, res);
});

app.post('/signup', function(req, res, next){
  //call to dashboardController
  dashboard.register(req, res);
});

app.post('/createuser', function(req, res, next){
  //call to dashboardController
  dashboard.createusers(req, res);
});
app.delete('/deleteuser/:id', function(req, res, next){
  //call to dashboardController
  dashboard.deleteuser(req, res);
});
app.post('/updateuser', function(req, res, next){
  //call to dashboardController
  dashboard.updateuser(req, res);
});
app.get('/getuser',function(req,res,next){
  dashboard.getuser(req,res);
})

module.exports = app;