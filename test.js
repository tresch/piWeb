var express   =    require("express");
 var mysql     =    require('mysql');
 var app       =    express();
 
 var pool      =    mysql.createPool({
     connectionLimit : 10, //important
     host     : 'localhost',
     user     : 'pi',
     password : 'piTin',
     database : 'piHub',
     debug    :  false
 });
 
 function check_garage(req,res) {
     
     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }   
 
         console.log('connected as id ' + connection.threadId);
         
         connection.query("select data1, data2, created  from payload order by id desc limit 1",function(err,rows){
             connection.release();
             if(!err) {
		console.log(rows);
                 res.json(rows);
             }           
         });
 
         connection.on('error', function(err) {      
               res.json({"code" : 100, "status" : "Error in connection database"});
               return;     
         });
   });
 }
 
function check_tim(req,res) {

    console.log('check tim');

    res.json({"code" : 200, "status" : "ok tim"});

    return;
 }


 app.get("/",function(req,res){-
         check_garage(req,res);
 });

 app.get("/garage",function(req,res){-
         check_garage(req,res);
 });

 app.get("/tim",function(req,res){-
         check_tim(req,res);
 });
 
 app.listen(3000);
