const express = require('express');
const db = require('../db/db.json');
const fs = require('fs');

const api = express.Router();

// fs.readFile('./db/db.json', (err, data) => {
//   if (err) throw err;
//   console.log(db)
//   console.log(data);
// });

api.get('/api/notes', (req, res, next) => {
  console.log('Robert you are successful!')
  res.json(db)
});


module.exports = api;