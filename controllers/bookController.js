// const Book = require('../models/book');

exports.getAllBooks = function (req, res) {
  	//response will be array of book objects
    //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]

    //stub
    const books = [{"_id": "1234", "title": "book_title", "commentcount": 1, "comments": ["It's Ok"] }];
    res.json(books);
}

exports.postNewBook = function (req, res){
    const title = req.body.title;
    //response will contain new book object including atleast _id and title

    //stub
    const book = { '_id': '0123456789', title};
    res.json(book);
}

exports.deleteAllBooks = function (req, res){
	//if successful response will be 'complete delete successful'
	res.send('NO IMPLEMENTADO AÚN: DELETE todos los libros');
}

exports.getBook = function (req, res){
	/*
function (req, res){
      var bookid = req.params.id;
      //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}

      //stub
      const book = {"_id": bookid, "title": "book_title", "commentcount": 1, "comments": ["It's Ok"] };
      res.json(book)
    }
	*/
    res.send('NO IMPLEMENTADO AÚN: GET libro vía _id');
}

exports.postNewCommentOnBook = function (req, res){
/*
function(req, res){
      var bookid = req.params.id;
      var comment = req.body.comment;
      //json res format same as .get

      //stub for addingCommentToBook <-- podría ir en una función aparte
      const book = {"_id": bookid, "title": "book_title", "commentcount": 1, "comments": ["It's Ok"] };
        try {
          book.comments.push(comment);
          book.commentcount++;
          res.json(book);

        } catch(err){
          res.send("Bad things happen: " + err);
        }
      
    }
*/

   res.send('NO IMPLEMENTADO AÚN: POST nuevo comentario a un libro');
}

exports.deleteBook = function(req, res){
/*
function(req, res){
      var bookid = req.params.id;
      //if successful response will be 'delete successful'

      //stub
      res.send('delete successful');
    }
*/

	res.send('NO IMPLEMENTADO AÚN: DELETE un libro');
}