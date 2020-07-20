const  mongoose = require('mongoose');
const MONGODB_CONNECTION_STRING = process.env.DB;

try {

  mongoose.connect(MONGODB_CONNECTION_STRING, 
  	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
  
  console.log('mongodb connected');

} catch(err) {
  console.error(err);
}

/* 
Otra forma, que se usa en https://www.youtube.com/watch?v=JLwwQMU6Ru0 :

mongoose.connect(MONGODB_CONNECTION_STRING, 
  	{ useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  	.then(() => {
	console.log('mongodb connected');
  	})
  	.catch((err) => {
	console.log(err.message);
  	})

*/

// manejadores de distintos eventos, por ej. 
// que mongoose se conecte

mongoose.connection.on('connected', () => {
	console.log('Mongoose connected to db.');
})

// que suceda algún error después de haberse conectado
mongoose.connection.on('error', err => {
  console.error(err);
});

// que se desconecte
mongoose.connection.on('disconnected', () => {
	console.log('Mongoose connection is disconnected');
});


// Según https://www.youtube.com/watch?v=JLwwQMU6Ru0 es necesario asegurarse de cerrar
// la conección y para eso hay que utilizar un manejador para el evento SIGINT
// en el objeto process, (este evento se dispara al ejecutar ctrl+c 
// para cerrar el servidor en el terminal):

process.on('SIGINT', async () => {
	await mongoose.connection.close();
	process.exit(0); // cerrar la aplicación con un código numérico
});