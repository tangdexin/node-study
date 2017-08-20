var express = require('express');
var test = express();
test.use(express.static('public'));
test.get('/', function (req, res) {
  res.send('Hello World!');
});
var server = test.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(host, port);
});

