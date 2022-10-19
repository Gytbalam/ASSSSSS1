/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 05.10.22
Assignment 1  */

/* ++++ All the code expressed here was taken from COMP-229 (Web app dev) CountQueuingStrategy, 
following the steps of educational videos. Also the book Beginning Node.js, Express & MongoDB Development (2019)
by Greg Lim was consoulted. */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
   { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about',{ title: 'About me'});
});

router.get('/projects', function(req, res, next) {
  res.render('projects',{ title: 'Projects'});
});

router.get('/services', function(req, res, next) {
  res.render('services',{ title: 'Services'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact',{ title: 'Contact'});
});

/* router.get('/book', function(req, res, next) {
  res.render('book',{ title: 'Book List'});
}); */

module.exports = router;
