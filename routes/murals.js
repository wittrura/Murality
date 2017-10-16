const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')

// route to get mural list
router.get('/', (req, res) => {
  knex('murals')
  .then((murals) =>{
    res.render('/murals/index', {murals});
  })
});

// route to get mural by ID with photos
router.get('/:id', (req, res) => {
  knex('murals')
  .where({id: req.params.id}).first()
  .then((mural) => {
    knex('artists')
    .where({id: mural.artist_id}).first()
    .then((artist) => {
      knex('neighborhoods')
      .where({id: mural.neighborhood_id}).first()
      .then((neighborhood) => {
        knex('photos')
        .where({mural_id: mural.id})
        .then((photos) => {
          res.render('/murals/show', {mural, artist, neighborhood, photos});
        })
      })
    })
  })
});


// route to post a new mural
router.post('/', (req, res) => {
  knex('murals')
  .insert(req.body)
  .then(() =>{
    res.redirect('/murals');
  })
})

// route to update an mural
router.patch('/:id', (req, res) => {
  knex('murals')
  .update(req.body)
  .where({id: req.params.id})
  .then(() =>{
    res.redirect('/murals');
  })
})

// route to delete an mural
router.delete('/:id', (req, res) => {
  knex('murals')
  .del()
  .where({id: req.params.id})
  .then(() =>{
    res.redirect('/murals');
  })
})

module.exports = router
