var express = require('express');
var app = express();
var path = require('path');
const resolve = path.resolve
var url = require('url');
var http = require('http');
var cors = require('cors');

const bodyParser = require('body-parser')


var express = require('express');
var app = express();

var ip = require('ip');
var mysql = require('mysql');
var pod_db = {};
console.log(ip.address());
if(ip.address()){
       pod_db = {
        host: 'localhost',
        user: "root",
        password: "",
        database: "Tolearn"
    }
}

var con = mysql.createConnection(pod_db);
con.connect(function(err) {
    if (!err) {
        console.log("Connected to MySQL");
    } else if (err) {
        console.log(err);
    }
});

// var XLSX = require('xlsx')
// var workbook = XLSX.readFile('./productdetails.xlsx');
// var sheet_name_list = workbook.SheetNames;
// var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
// console.log(xlData);



var jsonParser = bodyParser.json({
    limit: '500mb',
    type: 'application/json'
});
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
    limit: '500mb',
    type: 'application/x-www-form-urlencoding'
})

app.use(jsonParser);
app.use(urlencodedParser);

app.use(cors({
    origin: true,
    credentials: true
}), express.static(path.join(__dirname, 'projects')), express.static(path.join(__dirname, 'home')));

app.set('port', process.env.PORT || 3500);




var server = http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
server.timeout = 0;



app.post('/getdata',function(req,res,next){
    console.log("starts--->",req,"======>",req.body);

    var sql = "INSERT INTO `Employee Details` (`Employee name`,`designation`,`contact`,`joining`) VALUES ('" + req.body.Elem1 + "', '" + req.body.Elem2 + "','" + req.body.Elem3 + "','" + req.body.Elem4 + "')"; 
                console.log(sql);
                con.query(sql,function(err, result) {
                    console.log(result);
       




                    });
    res.send({
                                'msg':'Inserted Successfully'
                            });

});

app.post('/retrievedata',function(req,res,next){
    var sql="SELECT * FROM `Employee Details` WHERE `status` =1";
    console.log(sql);
      con.query(sql,function(err, result) {
                    console.log(result);
                       res.send({'Data':result});
               




                    });


});


app.post('/editdata',function(req,res,next){
    console.log("starts--->",req,"======>",req.body);

    var sql ="UPDATE `Employee Details` SET `Employee name` = '"+req.body.updateEmployee+"', `designation` = '"+req.body.updateDesig+"',`contact` = '"+req.body.updateContact+"' WHERE `id` ="+req.body.id+" ";
                console.log(sql);
                con.query(sql,function(err, result) {
                    console.log(result);
       

 


                    });
    res.send({
                                'msg':'Edited Successfully'
                            });

});


app.post('/deletedata',function(req,res,next){
    console.log("starts--->",req,"======>",req.body);


    var sql =" UPDATE `Employee Details`  SET `status` = 0 WHERE `id` ="+req.body.id+" ";
                console.log(sql);
                con.query(sql,function(err, result) {
                    console.log(result);
       

 


                    });
    res.send({
                                'msg':'Deleted Successfully'
                            });

});


app.post('/getsignin',function(req,res,next){
    console.log("starts--->",req,"======>",req.body);


 var sql="SELECT * FROM  `signinCheck` ";
    console.log(sql);
      con.query(sql,function(err, result) {
                    console.log(result);
                       res.send({'Data':result});
               




                    });

});

// app.post('/deletedata',function(req,res,next){
//     console.log("starts--->",req,"======>",req.body);


//     var sql =" DELETE FROM  `ProductDetails`  WHERE `id` ="+req.body.id+" ";
//                 console.log(sql);
//                 con.query(sql,function(err, result) {
//                     console.log(result);
       

 


//                     });
//     res.send({
//                                 'msg':'Deleted Successfully'
//                             });

// });

//json data reading 
// var pdetails =[];

// for( var i=0;i<xlData.length;i++){
//     var prodet=[];
//     prodet.push(xlData[i]["ProductName"]);
//      prodet.push(xlData[i]["Cost"]);

//      pdetails.push(prodet);
//     // pdetails.push(xlData[i]["ProductName"]+","+xlData[i]["Cost"]);
// }    
// console.log(pdetails);

    // var sql = "INSERT INTO ProductDetails (ProductName,Cost) VALUES ?" ;
    //             console.log(sql);
    //             con.query(sql,[pdetails] ,function(err, result) {
    //                 if(err) throw err;
    //                 console.log(result);
    //                 con.end();




    //                 });









