var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

// our bobs
var bobs = 0;

// make these file publicly available
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/bob', function(req, res) {
  console.log('inside the post route');
  console.log('req.body', req.body);
  bobs++;
  // res.sendStatus(200); // OK
  var bobTransferObject = {
    howMany: bobs
  };
  res.send(bobTransferObject);
});

app.listen(3001, function() {
  console.log('Im up and running');
});
