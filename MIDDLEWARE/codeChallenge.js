// Complete the timeMiddleware function to DRY the current application
// by attaching the currentTime to the request body as date.
// Use this in all routes and eliminate the duplicate code.

const express = require('express');
const app = express();

const database = {
  snacks: ['chips', 'apple', 'cookies'],
  sides: ['beans and rice', 'cole slaw', 'broccoli'],
  appetizers: ['oysters', 'dumplings', 'smoked almonds'],
};

// Add your code here:
const timeMiddleware = (food) => {
  const currentTime = Date.now();
  res.send(`${food} as of ${currentTime}: ${database.snacks}`);
};

app.get('/snacks', (req, res, next) => {
  timeMiddleware('snacks')
});

app.get('/sides', (req, res, next) => {
  timeMiddleware('sides')
});

app.get('/appetizers', (req, res, next) => {
  timeMiddleware('appetizers')
});
