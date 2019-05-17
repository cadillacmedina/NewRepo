var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dataFixer = require('fixer-api');

var urlencodedParser = bodyParser.urlencoded({ extended: true });

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Bootstrap 4 y librerías necesarias
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/popper.js/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));


app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use('/request',express.static(__dirname + '/http_call/request'))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req,res){
  return res.redirect('/index')
});

app.get('/cambio_divisas', function(req,res){
  return res.send(req.query); //?txtEUR=XX
});
app.get('/cambio_divisas', function(req,res){
  return res.render('cambio_divisas')
});
/*
app.post('/resultado', function(req,res){
  let url = 'http://data.fixer.io/api/convert?access_key=8c82f84a2f5d2a368a98d9201160100b&from=EUR&to=USD&amount=2000';
  dataFixer= req({
      url: url,
      json: true
  },(error,Response,body)=>{
    console.log(JSON.stringify(body,undefined,1));

  });
  return  res.send('<html><body><p>HOLA</p></html></body>');

});
app.get('/resultado', function(req, res) {
  var newAmount = cambio(req.query.amount)
  res.send("este es el amount modificado " + newAmount);
});*/

app.get('/resultado', function(req, res) {
  cambio(req.query.amount, res)  
});

function cambio(amount, res)
{
  let url = 'http://data.fixer.io/api/latest?access_key=8c82f84a2f5d2a368a98d9201160100b';
  //let url = 'http://data.fixer.io/api/convert?access_key=8c82f84a2f5d2a368a98d9201160100b&from=EUR&to=USD&amount='+amount;
  dataFixer=request({
      url: url,
      json: true
  },(error,Response,body)=>{
     
	  var newAmount =JSON.stringify(body,undefined,1)
	   console.log(newAmount);
	  res.send("este es el amount modificado " + newAmount);
  });
}

/*

app.get('/resultado/:txtEur', function(req, res) {
  res.send("tagId is set to " + req.params.txtEUR);
});
*/



module.exports = app;


