const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')

router.get('/', function(req, res) {
  res.status(200).json({ message: 'rawr! you did it!' });
});

module.exports = router
