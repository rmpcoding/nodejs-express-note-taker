const express = require('express');
const db = require('../db/db.json');

const app = express();

// Need to read notes (all) (it doesn't yet);

  const api = express.Router();

  api.get('/api/notes', (req, res, next) => {
    // return res.json(db);
    return res.send(`you're here`);
  })






  


// Must find a way to create unique id on each note


// Need to post notes (all)
// Need to delete notes (unique id)

  // Use GET on /api/notes
    // Should read the `db.json` file and return all saved notes as JSON.
  // Use POST /api/notes
    // Should recieve a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client.
  // Use DELETE /api/notes/:id
    // Should recieve a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique `id` when it's saved. In order to delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.


