let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

let bookController = require('../controllers/book');

//helper function for guard puposses
function requireAuth(req,res, next)
{
    //check if the user is looged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}
// get route for the book list page

router.get('/', bookController.displayBookList);


// GET route for display the add list page - create operation 

router.get('/add',requireAuth, bookController.displayAddPage);

// POST route for processing the add list page - create operation 

router.post('/add',requireAuth, bookController.processAddPage);

// EDIT route for display the edit list page - create operation 

router.get('/edit/:id',requireAuth, bookController.displayEditPage);

// POST route for display the edit list page - update operation 

router.post('/edit/:id',requireAuth, bookController.processEditPage);

// GET route to perform a book deletion- DELETE op

//delete
router.get('/delete/:id',requireAuth, bookController.performDelete);

module.exports = router;

