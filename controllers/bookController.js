// TO DO:
// Que en todas las respuestas donde devuelve un doc que filtre _id, title y comments.

const Book = require('../models/book');


exports.getAllBooks = function (req, res) {
  	//response will be array of book objects
    //json res format: [{"_id": bookid, "title": book_title, "commentcount": num_of_comments },...]

    Book.find({}, '_id title commentcount')
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
	.catch(err => res.send(err.message));
}

exports.getBook = async function (req, res){
    const bookid = req.params.id;
    //json res format: {"_id": bookid, "title": book_title, "comments": [comment,comment,...]}

    try {
    	const doc = await Book.findById(bookid, '_id title comments').exec(); // si no encuentra el doc, devuelve null
    	// filtra el resultado para que sólo devuelva _id, title y comments
      if(!doc){res.status(404).send('Book not found')}
    	else {res.json(doc)}
    } catch (err) {
    	res.status(500).json({"error": err.message});
    }
}

exports.postNewCommentOnBook = function (req, res){
  const bookid = req.params.id;
  const comment = req.body.comment;
  //json res format same as .get

  Book.findByIdAndUpdate(bookid, 
    {
      $push: { comments : [ comment ] },
      $inc: { commentcount : 1}
    }, {new:true}, (err, doc) => {
    if (err) res.status(500).json({"error": err.message})
    else if (doc) res.json(doc)
    else res.status(404).send('Not found')
  });
}

exports.deleteBook = function(req, res){
  const bookid = req.params.id;
  //if successful response will be 'delete successful'

  Book.findByIdAndDelete(bookid, (err) => {
    if (err) res.status(500).send(err);
    res.send('delete successful');
  });
}