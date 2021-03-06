/*
*
*
*       Complete the API routing below
*       
*       
*/

'use strict';



const { validateBook } = require('./validateBook');

const bookController = require('../controllers/bookController');

module.exports = function (app) {

  app.route('/api/books')
    .get(bookController.getAllBooks)
    
    .post(validateBook, bookController.postNewBook)
    
    .delete(bookController.deleteAllBooks);

  app.route('/api/books/:id')
    .get(bookController.getBook)
    
    .post(bookController.postNewCommentOnBook)
    
    .delete(bookController.deleteBook);
  
};
