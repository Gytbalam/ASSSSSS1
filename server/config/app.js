/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 05.10.22
Assignment 1  */

//installed 3rd party packages

let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//mongoose authentication
//let session = require('express-session');
let session = require('cookie-session');
let passport = require('passport');

let passportlocal = require('passport-local');
let localStrategy = passportlocal.Strategy;
let flash = require('connect-flash');


//db setup
let mongoose = require('mongoose');
let DB = require('./db');

// point mongoose to the db URI
mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console,'Connection error:'));
mongoDB.once('open',()=>{
  console.log('Connected to MongoDB...');
});

let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
//book router
let booksRouter = require('../routes/book');

let app = express();

// view Engine
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));
//images
app.use(express.static(path.join(__dirname, '../public')));

//setup express 
app.use(session({
  secret: "SomeSecret",
  saveUninitialized: false,
  resave: false
}));

//flash initilize
app.use(flash());

// initialize passport

app.use(passport.initialize());
app.use(passport.session());

// passport user config
//create user model instance

let userModel = require('../models/user');
let User = userModel.User;

passport.use(User.createStrategy());

// serialize and deserialize
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/', indexRouter);
app.use('/users', usersRouter);
//books DB
app.use('/book-list', booksRouter);

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
  res.render('error', {title: 'Error'});
});

module.exports = app;
