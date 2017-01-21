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
         
         connection.query("select node, data1, data2, created from payload where node ='GARAGE' order by id desc limit 1",function(err,rows){
             connection.release();
             if(!err) {
		console.log(rows);
                 res.json(rows);
             }           
         });
 
         connection.on('error', function(err) {      
               //res.json({"code" : 100, "status" : "Error in connection database garage"});
               return;     
         });
   });
 }

 function check_pool(req,res) {

     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }

         console.log('check pool connected as id ' + connection.threadId);

         connection.query("select node, data1, data2, created  from payload where node = 'POOL' order by id desc limit 1",function(err,rows){
             connection.release();
             if(!err) {
                console.log(rows);
                 res.json(rows);
             }
         });

         connection.on('error', function(err) {
               //res.json({"code" : 100, "status" : "Error in connection database pool"});
               return;
         });
   });
 }

 function check_tvroom(req,res) {

     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }

         console.log('check tvroom connected as id ' + connection.threadId);

         connection.query("select node, data1, data2, created  from payload where node = 'TVROOM' order by id desc limit 1",function(err,rows){
             connection.release();
             if(!err) {
                console.log(rows);
                 res.json(rows);
             }
         });

         connection.on('error', function(err) {
               //res.json({"code" : 100, "status" : "Error in connection database pool"});
               return;
         });
   });
 }


 function check_ble(req,res) {

     pool.getConnection(function(err,connection){
         if (err) {
           connection.release();
           res.json({"code" : 100, "status" : "Error in connection database"});
           return;
         }

         console.log('check ble connected as id ' + connection.threadId);

         connection.query("select node, data1, data2, created from payload where node like 'BLE%' order by id desc limit 1",function(err,rows){
             connection.release();
             if(!err) {
                console.log(rows);
                 res.json(rows);
             }
         });

         connection.on('error', function(err) {
               //res.json({"code" : 100, "status" : "Error in connection database pool"});
               return;
         });
   });
 }

 
function check_tim(req,res) {

    console.log('check tim');

    res.json({"code" : 200, "status" : "ok tim"});

    return;
 }

function check_text(req,res) {

    console.log('check text');

    res.send("89.2");

    return;
 }

 app.get("/",function(req,res){-
         check_text(req,res);
 });

 app.get("/garage",function(req,res){-
         check_garage(req,res);
 });

 app.get("/pool",function(req,res){-
         check_pool(req,res);
 });

 app.get("/tvroom",function(req,res){-
         check_tvroom(req,res);
 });

 app.get("/tim",function(req,res){-
         check_tim(req,res);
 });

 app.get("/ble",function(req,res){-
         check_ble(req,res);
 });
 
 app.listen(3000);

 app.use(express.static('public'));
