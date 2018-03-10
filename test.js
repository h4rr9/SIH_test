var express = require('express');
var bodyParser = require("body-parser");
var app = express();
var MongoClient = require('mongodb').MongoClient;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'null');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
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
