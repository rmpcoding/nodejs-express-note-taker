const express = require('express');
const db = require('../db/db.json');
const fs = require('fs');

const api = express.Router();


api.get('/api/notes', (req, res, next) => {
  res.json(db)
});

// POST /api/notes - Should recieve a new note to save on the request body, add it to the db.json file, and then return the new note to the client.
api.post('/api/notes', (req, res, next) => {
  console.log('POSTed something yay!')
})

// DELETE /api/notes/:id - Should recieve a query paramter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
api.delete('/api/notes/:id', (req, res, next) => {
  fs.readFile('./db/db.json', (err, data) => {
    if (err) throw err;
    console.log(db[0]) //iterate through the array using for loop;
  });
  console.log('DELETEd yay!')
})

module.exports = api;