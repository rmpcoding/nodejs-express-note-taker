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

api.delete('/api/notes/:id', (req, res, next) => {
    let resultsArr = db;
    let id;

    fs.readFile('./db/db.json', (err) => {
        if (err) throw err;

        id = parseInt(req.params.id);


        // for loop iterates over array to assign unique id after note is deleted
        for (let i = id; i < db.length; i++) {
            resultsArr[i].id -= 1;
            console.log(resultsArr)
        }

        resultsArr.splice(id, 1);
        console.log(resultsArr)
        const json = JSON.stringify(resultsArr, null, 2);

        fs.writeFile('./db/db.json', json, 'utf8', (err) => {
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