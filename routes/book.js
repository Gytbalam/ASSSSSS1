let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to book model

let Book = require('../models/book');

// get route for the book list page
router.get('/',(req,res,next) => {
Book.find((err, BookList) => {
    if(err)
    {
        return console.error(err);
    }
    else
    {
        console.log("################ "+ BookList);
       //console.log(bookList);
        res.render('book', {title: 'Book list', BookList: BookList})
    }
    });
});

module.exports = router;
