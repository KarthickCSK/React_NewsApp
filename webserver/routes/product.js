var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Product Router' });
  //res.send('this is me in product');
});

module.exports = router;
