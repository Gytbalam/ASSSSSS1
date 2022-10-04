/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 05.10.22
Assignment 1  */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
