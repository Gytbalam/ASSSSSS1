/* Student: Yoaltzin Xolalpa
ID: 301184971
DATE: 26.10.22
Assignment 2  */

let mongoose = require('mongoose');

// create a model classs
let bookModel = mongoose.Schema({
    name: String,
    author: String,
    published: String,
    description: String,
  //  price: Number

},
{
    collection: "books"
});

module.exports = mongoose.model('Book', bookModel);