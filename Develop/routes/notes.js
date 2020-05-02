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

        id = req.params.id;
        resultsArr.splice(id, 1);

        // NEED a way to make IDs match the splice in terms of unique IDs given AFTER deletion. 
        // create for loop
        // hook up req.params.id
        // match the req.params element with initial ID given
        // splice the element
        // but you're not done yet,
        // go into each object thereafter to access ID property
            // re-count from that point forth and assign new ID. 
        // Could this present a problem if and when a user deletes TWO notes?
            // Now that I'm thinking about it, no. It shouldn't. 
            
            
        // for (let i = 0; i < db.length; i++) {
        // }

        console.log(id);
        console.log(resultsArr);
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
