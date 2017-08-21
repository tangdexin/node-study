var express = require('express');
var test = express();
var app = express();
test.use(express.static('public'));
test.get('/', function (req, res) {
  res.send('Hello World!');
});
var server = test.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(host, port);
});

var birds = require('./birds');

test.use('/birds', birds)

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

test.get('/example/d', [cb0, cb1], function (req, res, next) {
  console.log('response will be sent by the next function ...');
  next();
}, function (req, res) {
  res.send('Hello from D!');
});

test.get('/user/:id', function (req, res, next) {
  // 如果 user id 为 0, 跳到下一个路由
  if (req.params.id == 0) next('route');
  // 否则将控制权交给栈中下一个中间件
  else next(); //
}, function (req, res, next) {
  // 渲染常规页面
  res.render('regular');
});

// 处理 /user/:id， 渲染一个特殊页面
test.get('/user/:id', function (req, res, next) {
  res.render('special');
});