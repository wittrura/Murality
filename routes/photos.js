const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')

router.post('/', (req, res) => {
  knex('photos')
  .insert({
    url : req.body.url,
    mural_id : req.body.mural_id
  })
  .then(() => {
    res.redirect(`/murals/${req.body.mural_id}`)
  });
});


module.exports = router
