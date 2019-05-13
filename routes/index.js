var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Cambio Divisas. */
router.get('/changes', function(req, res, next) {
  res.render('cambio_divisas', { title: 'Cambio Divisas' });
});

module.exports = router;
