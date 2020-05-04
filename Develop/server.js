const express = require('express');
const routes = require('./routes/index');
const api = require('./routes/notes');
const static = require('node-static');

const app = express();

const PORT = process.env.PORT || 3000;

// Express middleware
// __________________________________________
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Static CSS for deployment
const file = new static.Server('./public');

const staticListen = (req, res) => {
    req.addListener('end', function() {
        file.serve(req, res);
    }).resume();
}

staticListen();

// Custom routes (html index, notes api) middleware
// __________________________________________
app.use(routes, api);

app.listen(PORT, () => {
    console.log(`🌎 Server is listening on ${PORT}`);
});
