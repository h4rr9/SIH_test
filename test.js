var express = require('express');
var bodyp = require('body-parser');
var app = express();

app.use(bodyp.urlencoded({ extended : false}));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});



var server = app.listen(5000,function(){
    console.log("Node Server is Running..");
})
