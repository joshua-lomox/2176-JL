const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/movies', (req, res) => {
  const movie = {
    id: movies.length + 1,
    title: req.body.title,
  };
  movies.push(movie);
  res.send(movie);
});
