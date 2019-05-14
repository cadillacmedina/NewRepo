var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Cambio Divisas. */
router.get('/cambio_divisas', function(req, res, next) {
  res.render('cambio_divisas', { title: 'Cambio Divisas' });
});

router.use('/static', express.static(__dirname + '/public'));

module.exports = router;
