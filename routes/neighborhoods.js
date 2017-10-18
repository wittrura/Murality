const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')

// route to get artist list
router.get('/', (req, res) => {
  knex('neighborhoods')
    .then(neighborhoods => res.render('neighborhoods/index', {neighborhoods}));
});

module.exports = router
