const mongoose = require('mongoose');

const MONGODB_CONNECTION_STRING = process.env.DB;

try {

  mongoose.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

} catch(error) {
  console.log("No se pudo conectar a la base de datos");
}

const Book = new mongoose.Schema({
  title: {type: String, required: true, trim: true, minlength: 2, maxlength: [50, 'Title too long'] },
  comment_count: {type: Number, default: 0, min: 0, max: [200, 'No more comments.']},
  comments: [ { type: String, trim: true, minlength: 2, maxlength: 300 } ]
});

module.exports = mongoose.model('Book', Book);