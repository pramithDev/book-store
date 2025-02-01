const express = require('express');
const { postABook, getAllBooks, getSingleBook } = require('./book.controller');
const router = express.Router();


// post = when submit something frontend to db
// get = when we want to get something from db to frontend
// put/patch = when we want to update something
// delete = when we want to delete something

// Post a book
router.post('/create-book', postABook); 

// // get all books
router.get('/', getAllBooks);

// Single book endpoint
router.get('/:id', getSingleBook);

module.exports = router;