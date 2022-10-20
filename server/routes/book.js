let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to book model

let Book = require('../models/book');
let bookController = require('../controllers/book');

// get route for the book list page
/* router.get('/',(req,res,next) => {
Book.find((err, BookList) => {
    if(err)
    {
        return console.error(err);
    }
    else
    {
        console.log("################ "+ BookList);
       //console.log(bookList);
        res.render('book/list', {title: 'Books', BookList: BookList})
    }
    });
}); */

router.get('/', bookController.displayBookList);


// GET route for display the add list page - create operation 

/* router.get('/add',(req,res,next) => {
    res.render('book/add', {title: 'Add Books'})
}); */

router.get('/add', bookController.displayAddPage);

// POST route for processing the add list page - create operation 
/* router.post('/add',(req,res,next) => {
    let newBook = Book({
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

    Book.create(newBook, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the book list
            res.redirect('/book-list');
        }
    });

}); */

router.post('/add', bookController.processAddPage);

// EDIT route for display the edit list page - create operation 

/* router.get('/edit/:id',(req,res,next) => {
    let id = req.params.id;

    Book.findById(id,(err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show edit view
            res.render('book/edit', { title:'Edit Book',book: bookToEdit})
        }
    });
});
 */

router.get('/edit/:id', bookController.displayEditPage);

// POST route for display the edit list page - update operation 

/* router.post('/edit/:id',(req,res,next) => {
    let id = req.params.id

    let updatedBook = Book({
        "_id": id,
        "name": req.body.name,
        "author": req.body.author,
        "published": req.body.published,
        "description": req.body.description,
        "price": req.body.price
    });

Book.updateOne({ _id: id}, updatedBook, (err) => {
    if(err)
    {
        console.log(err);
        res.end(err);
    }
    else{
        //refresh the book list
        res.redirect('/book-list');
    }

});

});
 */

router.post('/edit/:id', bookController.processEditPage);

// GET route to perform a book deletion- DELETE op

/* router.get('/delete/:id',(req,res,next) => {
    let id =  req.params.id;

    Book.remove({ _id: id}, (err) => {
        if(err)
        {
        console.log(err);
        res.end(err);
        }
        else
        {
             //refresh the book list
        res.redirect('/book-list');
        }
    });
}); */

router.get('/delete/:id', bookController.performDelete);

module.exports = router;

