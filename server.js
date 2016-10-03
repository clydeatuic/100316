var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('node_modules'));
app.use(express.static('assets'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/login.html'));
});

app.get('/register', function (req, res) {
  res.sendFile(path.join(__dirname + '/register.html'));
});

app.get('/dashboard', function (req, res) {
  res.sendFile(path.join(__dirname + '/dashboard.html'));
});

app.listen(3003, function () {
  console.log('Example app listening on port 3003!');
});