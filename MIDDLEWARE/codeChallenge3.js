const express = require('express');
const app = express();
// Add your code below:
const morgan = require('morgan')
app.use(morgan('short'))
// Add your code above

app.get('/say-hi', (req, res, next) => {
  res.send('Hi!');
});

app.get('/say-bye', (req, res, next) => {
  res.send('Bye!');
});
