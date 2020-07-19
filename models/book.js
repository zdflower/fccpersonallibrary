const mongoose = require('mongoose');

const MONGODB_CONNECTION_STRING = process.env.DB;

mongoose.connect(MONGODB_CONNECTION_STRING, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const Book = new mongoose.Schema({
  title: {type: String, required: true, trim: true, minlength: 2, maxlength: [50, 'Title too long'] },
  comment_count: {type: Number, default: 0, min: 0, max: [200, 'No more comments.']},
  comments: [ { type: String, trim: true, minlength: 2, maxlength: 300 } ]
});

module.exports = mongoose.model('Book', Book);