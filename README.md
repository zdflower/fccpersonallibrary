**FreeCodeCamp**- Information Security and Quality Assurance
------

Project Personal Library

1) ADD YOUR MongoDB connection string to .env without quotes as db
    `example: DB=mongodb://admin:pass@1234.mlab.com:1234/fccpersonallib`
2) SET NODE_ENV to `test` without quotes
3) You need to create all routes within `routes/api.js`
4) You will add any security features to `server.js`
5) You will create all of the functional tests in `tests/2_functional-tests.js`


Project boilerplate: <https://github.com/freeCodeCamp/boilerplate-project-library/>

# User stories:

- [x] Nothing from my website will be cached in my client as a security measure.
- [x] I will see that the site is powered by 'PHP 4.2.0' even though it isn't as a security measure.
- [x] I can **post** a <code>title</code> to /api/books to add a book and returned will be the object with the <code>title</code> and a unique <code>_id</code>.
- [x] I can **get** /api/books to retrieve an array of all books containing <code>title</code>, <code>_id</code>, & <code>commentcount</code>.
- I can **get** /api/books/{_id} to retrieve a single object of a book containing <code>title</code>, <code>_id</code>, & an array of <code>comments</code> (empty array if no comments present).
- [] I can **post** a <code>comment</code> to /api/books/{_id} to add a comment to a book and returned will be the books object similar to **get** /api/books/{_id}.
- [] I can **delete** /api/books/{_id} to delete a book from the collection. Returned will be 'delete successful' if successful.
- [] If I try to request a book that doesn't exist I will get a 'no book exists' message.
- [x] I can send a **delete** request to /api/books to delete all books in the database. Returned will be 'complete delete successful' if successful.
- [] All 6 functional tests required are complete and passing.

# Observations and references:

## http caching

<https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching>

<https://helmetjs.github.io/docs/nocache/> Dice que ya no se va a incluir en una futura versión de helmet.

<https://github.com/helmetjs/helmet/issues/215>

<https://stackoverflow.com/questions/20429592/no-cache-in-node-js-server/30453242#30453242> 

<https://stackoverflow.com/a/51941305> Mencionan un paquete de npm llamado nocache:

<quote>

You can use nocache Middleware to turn off caching.

npm install --save nocache

Apply the middleware to your app

const nocache = require('nocache');
...
app.use(nocache());

This disables browser caching.

</quote>

## dotenv

Paquete para utilizar variables de entorno almacenadas en .env

<https://www.npmjs.com/package/dotenv>

## About input validation: 

https://express-validator.github.io/docs/

https://flaviocopes.com/express-validate-input/

https://dev.to/nedsoft/a-clean-approach-to-using-express-validator-8go

[How to implement validation in a separate file using express-validator](https://stackoverflow.com/a/61268141)

## About input sanitization:

https://express-validator.github.io/docs/sanitization.html

https://flaviocopes.com/express-sanitize-input/

## Mongoose

https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/

https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose

https://mongoosejs.com/docs/index.html

https://mongoosejs.com/docs/connections.html#error-handling

[Mongoose Connecting to MongoDB](https://www.youtube.com/watch?v=JLwwQMU6Ru0)

## Respuesta al intento de crear un nuevo libro sin proveer título

En la app de ejemplo de freecodecamp, en este caso, devuelve "missing title" como texto en el cuerpo de la respuesta.

En mi app devuelve un array de errores que vienen del validator.

## Respuesta al post correcto de un nuevo libro

En la app de ejemplo de freecodecamp devuelven algo como 

    {"title":"La Ilíada","comments":[],"_id":"5f161aa3000e7d0073795d77"}

En mi app: 

    {
    "__v": 0,
    "_id": "5f161dbf6f31dc092f9f2b85",
    "comment_count": 0,
    "comments": [],
    "title": "La Ilíada"
    }

Tal vez tendría que procesar la respuesta de la base de datos y sólo devolver \_id, comments y title.