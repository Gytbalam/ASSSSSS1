/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 26.10.22
Assignment 2  */

/* ++++ All the code expressed here was taken from COMP-229 (Web app dev) CountQueuingStrategy, 
following the steps of educational videos. Also the book Beginning Node.js, Express & MongoDB Development (2019)
by Greg Lim was consoulted. */

let express = require('express');
let router = express.Router();

//index of controllers

let indexController = require('../controllers/index');



/* GET home page. */

router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

/* BEFORE router.get('/about', function(req, res, next) {
  res.render('about',{ title: 'About me'});
}); */

router.get('/projects', indexController.displayProjectsPage);

/* router.get('/projects', function(req, res, next) {
  res.render('projects',{ title: 'Projects'});
}); */

router.get('/services', indexController.displayServicesPage);

/* router.get('/services', function(req, res, next) {
  res.render('services',{ title: 'Services'});
}); */

router.get('/contact', indexController.displayContactPage);

/* router.get('/contact', function(req, res, next) {
  res.render('contact',{ title: 'Contact'});
}); */


//GET ROUTE FOR displaying the login page
router.get('/login', indexController.displayLoginPage);

//GET ROUTE FOR processing the login page
router.post('/login', indexController.processLoginPage);

//GET ROUTE FOR displaying the register page
router.get('/register', indexController.displayRegisterPage);

//GET ROUTE FOR processing the register page
router.post('/register', indexController.processRegisterPage);

//logout
router.get('/logout', indexController.performLogout);

module.exports = router;
