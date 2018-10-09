var mysql      = require('mysql');
var _          = require('lodash');
var url = require('../../config/config').mysql;
url["multipleStatements"] =true
var connection = mysql.createConnection(url);
var async = require('async');

module.exports= {

 login: function(req,res){
    console.log("-------node side hitting---------",req.body)
   data=req.body;
   console.log("--------here node ---------",req.body[0].username)


    var sql = 'select * from auro_user where email = ("'+req.body[0].username+'" )';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      else{

        console.log("got data : " + JSON.stringify(result));
        if(result.length == 0){
          console.log("data is null"+JSON.stringify(result).length)
          return res.json({save:false,message:'invalid'})
        }
        else{
          console.log("not null")
          if(result[0].password === req.body[0].password){
            var user_session = {
              username   : result[0].firstname,
            };
            console.log(user_session)
            var jwt    = require('jsonwebtoken');
            var token  = jwt.sign(user_session, 'scriptbees', {
              expiresIn: '2h' // expires in 3 hours
            });
            var name = result[0].firstname +" "+result[0].lastname;
            var role = result[0].user_role_id;
            console.log("----------result",name+" "+role)
            console.log("token"+token)

            return res.json({save:true,message:'valid',token:token,name:name,role:role})

          }
          else{
            console.log("not matching")
            return res.json({save:false,message:'invalid'})
          }
        }

        }
        });

  },
  getsearchresult:function(req,res){
  	console.log("hittign get data")

connection.query('SELECT * FROM search_results;',
	function (err,result,feilds) {
		if(err){
			console.log("data not found")
		}
		else{
			console.log("getting data",JSON.stringify(result))
			res.status(200).json(result);
		}
	})
  },


  getuser:function(req,res){
  	console.log("----hitedSSSS----11111s")
  }
}