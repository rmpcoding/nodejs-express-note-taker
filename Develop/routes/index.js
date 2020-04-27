const express = require('express');
const path = require('path');
const router = express.Router();

const app = express();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})

router.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
})

module.exports = router;