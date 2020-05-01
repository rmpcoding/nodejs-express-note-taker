const express = require('express');
const db = require('../db/db.json');
const fs = require('fs');

const api = express.Router();

api.get('/api/notes', (req, res, next) => {
    res.json(db);
});

api.post('/api/notes', (req, res, next) => {
    let resultsArr = [];
    let note;
    let id;

    for (let i = 0; i < 1; i++) {
        if (db[i]) {
            resultsArr = db;
            id = db[db.length - 1].id;
            id += 1;
            req.body.id = id;
            note = req.body;
            resultsArr.push(note);
        } else {
            req.body.id = 0;
            note = req.body;
            resultsArr.push(note);
        }
    }

    const json = JSON.stringify(resultsArr, null, 2);

    fs.writeFile('./db/db.json', json, 'utf8', (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('You have successfully written the json file.');
        }
    });

});

// DELETE /api/notes/:id - Should recieve a query parameter containing the id of a note to delete. This means you'll need to find a way to give each note a unique id when it's saved. In order to delete a note, you'll need to read all notes from the db.json file, remove the note with the given id property, and then rewrite the notes to the db.json file.
api.delete('/api/notes/:id', (req, res, next) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        for (let i = 0; i < db.length; i++) {
            id = req.params.id
            db.splice(id, 1)
            console.log(db)
        }
        fs.writeFile('./db/db.json', db, 'utf8', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('You have successfully written the json file.');
            }
        });
    });
    console.log('DELETEd yay!');
});

module.exports = api;