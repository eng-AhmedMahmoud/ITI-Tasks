const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.post('/new-endpoint', (req, res) => {
  res.status(200).send('Hello World!');
});

const server = app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

module.exports = server;