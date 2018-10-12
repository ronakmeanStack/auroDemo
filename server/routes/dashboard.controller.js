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
			console.log("---",result)
			res.status(200).json(result);
		}
	})
  },

//changed
  savereview:function(req,res){
    data=req.body;
  	console.log("----hitedSSSS----save review",data)
    //var artId=data.articleId;
    var artId=data.id;
var artdata={
    belongstatus:data.belongstatus,
    contryauth:data.contryauth,
    Publication_Date:data.Publication_Date,
    Product_Approval_Date:data.Product_Approval_Date,
    Product_Withdrawn_Date:data.Product_Withdrawn_Date,
    drug_Start_Date:data.drug_Start_Date,
    drugApproval_Date:data.drugApproval_Date,
    drugWithdrawn_Date:data.drugWithdrawn_Date,
    administration_of_Drug:data.administration_of_Drug,
    Formulation_of_Drug:data.Formulation_of_Drug,
    Brand_drug_mentioned:data.Brand_drug_mentioned,
    Author_Comments:data.Author_Comments,
    status:"submit for review"
}
console.log("----id",parseInt(data.articleId)+24,artId)
connection.query('UPDATE search_results SET ? WHERE id = ' + artId, artdata,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })

  },

 createusers:function (req,res) {
    var data= req.body;
    var values = [data.belongstatus,data.contryauth,data.Publication_Date,data.Product_Approval_Date,data.Product_Withdrawn_Date,
    data.drug_Start_Date,data.drugApproval_Date,data.drugWithdrawn_Date,data.administration_of_Drug,data.Formulation_of_Drug,data.Brand_drug_mentioned,
    data.Author_Comments]
    var date =  new Date()

    var sql = 'INSERT INTO login (user_Name, password,created_date,first_Name,last_Name,confirm_password)' +
      ' VALUES ("'+data.userName+'","'+data.password+'","'+date+'","'+data.firstName+'","'+data.lastName+'","'+data.confirmPassword+'") ';
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  },
  test:function(req,res){
    var data =req.body;
   
  
 var data = {
            search_term:data[0].search_term,
            status: data[0].status,
            }

    connection.query('UPDATE search_results SET ? WHERE id = ' + req.body[0].id, data,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })
  },
  deleteart:function(req,res){
    id=req.body;
    console.log("hitting id",id)
    var data = {
            deleted:"yes",
            
            }
            console.log("---",id)

    connection.query('UPDATE search_results SET ? WHERE id = ' + id.id, data,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })
  },
 
 savedraft:function(req,res){
    data=req.body;
    console.log("----new----save draft",data)
    var artId=data.articleId;
    var artdata={
    belongstatus:data.belongstatus,
    contryauth:data.contryauth,
    Publication_Date:data.Publication_Date,
    Product_Approval_Date:data.Product_Approval_Date,
    Product_Withdrawn_Date:data.Product_Withdrawn_Date,
    drug_Start_Date:data.drug_Start_Date,
    drugApproval_Date:data.drugApproval_Date,
    drugWithdrawn_Date:data.drugWithdrawn_Date,
    administration_of_Drug:data.administration_of_Drug,
    Formulation_of_Drug:data.Formulation_of_Drug,
    Brand_drug_mentioned:data.Brand_drug_mentioned,
    Author_Comments:data.Author_Comments,
   /* status:"saved as drafted"*/
}

 connection.query('UPDATE search_results SET ? WHERE id = ' + artId, artdata,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })

  },

//chenged
  savedraftByre:function(req,res){
    data=req.body;
    console.log("----new----save draft savedraftByre",data)
    /*var artId=data.articleId;*/
    var artId=data.id;
    var artdata={
    belongstatus:data.belongstatus,
    contryauth:data.contryauth,
    Publication_Date:data.Publication_Date,
    Product_Approval_Date:data.Product_Approval_Date,
    Product_Withdrawn_Date:data.Product_Withdrawn_Date,
    drug_Start_Date:data.drug_Start_Date,
    drugApproval_Date:data.drugApproval_Date,
    drugWithdrawn_Date:data.drugWithdrawn_Date,
    administration_of_Drug:data.administration_of_Drug,
    Formulation_of_Drug:data.Formulation_of_Drug,
    Brand_drug_mentioned:data.Brand_drug_mentioned,
    Author_Comments:data.Author_Comments,
    status:"saved as drafted"
}

 connection.query('UPDATE search_results SET ? WHERE id = ' + artId, artdata,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })

  },
  savedtriage:function(req,res){
    data=req.body;
    console.log("----new----save draft",data)
    var artId=data.id;
    var artdata={
    belongstatus:data.belongstatus,
    contryauth:data.contryauth,
    Publication_Date:data.Publication_Date,
    Product_Approval_Date:data.Product_Approval_Date,
    Product_Withdrawn_Date:data.Product_Withdrawn_Date,
    drug_Start_Date:data.drug_Start_Date,
    drugApproval_Date:data.drugApproval_Date,
    drugWithdrawn_Date:data.drugWithdrawn_Date,
    administration_of_Drug:data.administration_of_Drug,
    Formulation_of_Drug:data.Formulation_of_Drug,
    Brand_drug_mentioned:data.Brand_drug_mentioned,
    Author_Comments:data.Author_Comments,
    status:"saved as triage"
}

 connection.query('UPDATE search_results SET ? WHERE id = ' + artId, artdata,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })

  },
  savedasdraftintial:function(req,res){
    data=req.body;
    console.log("----new----save draft",data)
   // var artId=data.articleId;
    var artId=data.id;
    var artdata={
    belongstatus:data.belongstatus,
    contryauth:data.contryauth,
    Publication_Date:data.Publication_Date,
    Product_Approval_Date:data.Product_Approval_Date,
    Product_Withdrawn_Date:data.Product_Withdrawn_Date,
    drug_Start_Date:data.drug_Start_Date,
    drugApproval_Date:data.drugApproval_Date,
    drugWithdrawn_Date:data.drugWithdrawn_Date,
    administration_of_Drug:data.administration_of_Drug,
    Formulation_of_Drug:data.Formulation_of_Drug,
    Brand_drug_mentioned:data.Brand_drug_mentioned,
    Author_Comments:data.Author_Comments,
    status:"saved as drafted"
}

 connection.query('UPDATE search_results SET ? WHERE id = ' + artId, artdata,(err,result)=>{

      if(err){
        console.log("getting error",err)
        res.json({
          status:400,
          message:err
        })
      }

      else{
        console.log("not error")
        res.json({
          status:200,
          message:result
        })
      }

    })

  }

 /* connection.query('UPDATE users SET Name = ? WHERE UserID = ?', [name, userId])*/

}