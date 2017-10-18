const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')

// route to get mural list
router.get('/murals', (req, res) => {
  knex('murals')
    .then(murals => res.status(200).json(murals));
});

module.exports = router;
