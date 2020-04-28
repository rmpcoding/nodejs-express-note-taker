const express = require('express');
const path = require('path');

const app = express();
const router = express.Router();

router.get('/notes', (req, res, next) => {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
  console.log(`hit the /notes route`)
})

router.get('*', (req, res, next) => {
  if (req.url !== '/api/notes') {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  } else {
    next();
  }
})

module.exports = router;