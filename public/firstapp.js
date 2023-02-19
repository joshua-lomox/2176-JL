const { response } = require('express');
var express = require('express');

var app = express();

app.get('/', function (request, response) {
  response.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Server running at port 3000');
});