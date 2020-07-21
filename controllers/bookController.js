const Book = require('../models/book');


exports.getAllBooks = function (req, res) {
  	//response will be array of book objects
    //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]

    /* stub
    const books = [{"_id": "1234", "title": "book_title", "commentcount": 1, "comments": ["It's Ok"] }];
    res.json(books);
    */

    Book.find({})
    	.then(docs => res.json(docs))
    	.catch(error => res.json(error));
}

exports.postNewBook = function (req, res){
    const title = req.body.title;
    //response will contain new book object including atleast _id and title

    const book = new Book({ title });

    book.save()
      .then( doc => res.json(doc))
      .catch( err => res.json(err));
}

exports.deleteAllBooks = function (req, res){
	//if successful response will be 'complete delete successful'
	Book.deleteMany({})
	.then( () => res.send('complete delete successful'))
	.catch(err => res.send(error.message));
}

exports.getBook = async function (req, res){
    const bookid = req.params.id;
    //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}

    // Con await, tengo que poner async delante de la declaración de la función más arriba.

    try {
    	const doc = await Book.findById(bookid).exec(); // si no encuentra el doc, devuelve null
    	if(!doc){ res.status(404).send('Book not found')}
    	else{res.json(doc);}
    } catch (err) {
    	res.status(500).json({"error": err.message}); // ¿Está bien que devuelva este código 500?
    }

    
	// Con un callback:
/*
	 Book.findById(bookid, (err, doc) => {
		if (err) res.json({"error": err.message})
		else if (doc) res.json(doc)
		else res.status(404).send('Not found')
	 })
*/

    // con then y catch
/*
    Book.findById(bookid).exec()
    .then(doc => { 
    	if (doc) {res.json(doc);}
    	else {res.status(404).send('Not found');}
    })
    .catch(err => res.json({"error": err.message}));
*/

// Parece que funciona de las tres maneras
    
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