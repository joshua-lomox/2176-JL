const express = require('express');
const bodyParser = require('body-parser');

const books = [
  {
    id: '1',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    published: '1960',
  },
  {
    id: '2',
    title: 'Don Quijote',
    author: 'Miguel de Cervantes',
    published: '1605',
  },
  {
    id: '3',
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
    published: '1954',
  },
  {
    id: '4',
    title: "Harry Potter and the Philosopher's Stone",
    author: 'J.K. Rowling',
    published: '1997',
  },
];

const app = express();

app.use(bodyParser.json());

// Define a GET route for retrieving all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Define a GET route for retrieving a specific book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find((book) => book.id === req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Define a POST route for creating a new book and adding it to the json list (required to use Postman)
app.post('/books', (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});