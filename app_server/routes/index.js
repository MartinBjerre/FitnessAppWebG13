var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fitness App Alexander, Martin og Nanna' });
});


var homepageController = function (req, res) {
    res.render('index', { title: 'Express' });
};


///* GET homepage. */
//router.get('/', homepageController);

module.exports = router;
