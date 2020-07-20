const  mongoose = require('mongoose');
const MONGODB_CONNECTION_STRING = process.env.DB;

try {

  mongoose.connect(MONGODB_CONNECTION_STRING, 
  	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  
  console.log('mongodb connected');

} catch(err) {
  console.error(err);
}

mongoose.connection.on('error', err => {
  console.error(err);
});


/* 
Otra forma, que se usa en https://www.youtube.com/watch?v=JLwwQMU6Ru0:

mongoose.connect(MONGODB_CONNECTION_STRING, 
  	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  	.then(() => {
	console.log('mongodb connected');
  	})
  	.catch((err) => {
	console.log(err.message);
  	})

*/