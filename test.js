var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'null');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

MongoClient.connect("mongodb://localhost:27017",function(err, client){
	db = client.db("farmer");
	app.post('/submit-data', function (req, res) {
    	console.log(req.body);

    	db.collection("users",function(err, c){
    		c.insert(req.body);
		})

    	res.end("yes");	
	});
	
})




var server = app.listen(5000,function(){
    console.log("Node Server is Running..");
})
