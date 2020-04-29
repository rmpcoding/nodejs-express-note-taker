const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/notes', (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
})

router.get('*', (req, res, next) => {
  if (req.path !== '/api/notes') {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } else {
    next();
  }
})

module.exports = router;