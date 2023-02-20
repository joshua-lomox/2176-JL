var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/register_get.html', function (req, res) 
{ res.sendFile(__dirname + "/" + "register_get.html" );
})

app.get('/getprocess.js', function (req, res) { 
response = {
    first_name:req.body.first_name,
    last_name:req.body.last_name
};
console.log(response); 
res.end(JSON.stringify(response));
})

var server = app.listen(5000, function () {
var host = server.address().address
var port = server.address().port
console.log ("Example app listening at http://%s:%s", host, port)
})