/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 05.10.22
Assignment 1  */

/* ++++ All the code expressed here was taken from COMP-229 (Web app dev) CountQueuingStrategy, 
following the steps of educational videos. Also the book Beginning Node.js, Express & MongoDB Development (2019)
by Greg Lim was consoulted. */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
