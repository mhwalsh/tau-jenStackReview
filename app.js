var express = require('express');
var path = require('path');

var app = express();

// make these file publicly available
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.post('/bob', function(req, res) {
  console.log('inside the post route');
  res.sendStatus(200); // OK
});

app.listen(3001, function() {
  console.log('Im up and running');
});
