const express = require('express');
const db = require('../db/db.json');
const fs = require('fs');
const path = require('path');

const api = express.Router();

const writeFile = (data) => {
    fs.writeFile('./db/db.json', data, 'utf8', (err) => {
        if (err) throw err;
        console.log('You have successfully written the json file.');
    });
};

api.get('/api/notes', (req, res, next) => {
    return res.sendFile(path.join(__dirname, "../db/db.json"));
});

api.post('/api/notes', (req, res, next) => {
    let resultsArr = db;
    let note = req.body;

    for (let i = 0; i < 1; i++) {
        if (db[i]) {
            let id = db[db.length - 1].id;
            id += 1;
            req.body.id = id;
            resultsArr.push(note);
        } else {
            req.body.id = 0;
            resultsArr.push(note);
        }
    }

    const json = JSON.stringify(resultsArr, null, 2);
    writeFile(json);
    
    res.json(json);
});

api.delete('/api/notes/:id', (req, res, next) => {
    let resultsArr = db;
    let id;

    fs.readFile('./db/db.json', (err) => {
        if (err) throw err;

        id = parseInt(req.params.id);

        // for loop starts at index of requested delete note, and it iterates over the rest of the array to assign a unique id to each note thereafter
        for (let i = id; i < db.length; i++) {
            resultsArr[i].id -= 1;
        }

        resultsArr.splice(id, 1);
        const json = JSON.stringify(resultsArr, null, 2);
        writeFile(json);

        res.json(true);
    });
});

module.exports = api;