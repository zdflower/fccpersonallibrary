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
    
    .post(validateBook, bookController.postNewBook) // "Gerda malaperis" me da error según validateBook, no debería. Debo haber hecho mal la selección de validators.
    // Me parece que .isAlphanumeric daba error porque el título contenía un espacio que no es alfanumérico.
    
    .delete(bookController.deleteAllBooks);

  app.route('/api/books/:id')
    .get(bookController.getBook)
    
    .post(bookController.postNewCommentOnBook)
    
    .delete(bookController.deleteBook);
  
};
