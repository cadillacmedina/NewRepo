var express = require('express');
let fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Cambio Divisas. */
router.get('/cambio_divisas', function(req, res, next) {
  res.render('cambio_divisas', { title: 'Cambio Divisas' });
});

router.get('/resultado',function(req, res, next)
  {
    res.render('resultado', { title: 'Resultado' });

    /*
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    fs.readFile('./index.html', null, function (error, data) {
      if (error) {
        res.writeHead(404);
        res.write('file not found');
      } else {
        res.write(data);
      }
      res.end();
    });*/
  });

router.use('/static', express.static(__dirname + '/public'));



module.exports = router;
