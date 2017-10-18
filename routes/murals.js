const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

// route to get mural list
router.get('/', (req, res) => {
  knex('murals')
    .then((murals) => {

      res.render('murals/index', {
        murals
      });
    })
});

//grabs the new mural page
router.get('/create', (req, res) => {
  knex('neighborhoods')
    // .select('name')
    .then((neighborhoods) => {
      knex('artists')
        // .select('name')
        .then((artists) => {
          console.log(artists, neighborhoods)
          res.render('murals/create', {
            neighborhoods,
            artists
          });
        })
    })
})

//grabs the edit murals page
router.get('/:id/edit', (req, res) => {
  knex('artists')
    .then((artists) => {
      knex('neighborhoods')
        .then((neighborhoods) => {
          knex('murals')
            .where({
              id: req.params.id
            })
            .first()
            .then((mural) => {
              res.render('murals/edit', {
                artists,
                neighborhoods,
                mural
              });

            })
        })
    });
});

// route to get mural by ID with photos
router.get('/:id', (req, res) => {
  knex('murals')
    .where({
      id: req.params.id
    }).first()
    .then((mural) => {
      knex('artists')
        .where({
          id: mural.artist_id
        }).first()
        .then((artist) => {
          knex('neighborhoods')
            .where({
              id: mural.neighborhood_id
            }).first()
            .then((neighborhood) => {
              res.render('murals/show', {
                mural,
                artist,
                neighborhood
              });
            })
        })
    })
});


// route to post a new mural
router.post('/', (req, res) => {
  let newMural = {
    name: req.body.name,
    artist_id: req.body.artist_id,
    description: req.body.description,
    neighborhood_id: req.body.neighborhood_id,
    user_id: 1
  }
  console.log(req.body)
  knex('murals')
    .insert(newMural)
    .then(() => {
      res.redirect('/murals');
    })
})

// route to update an mural
router.patch('/:id', (req, res) => {
  knex('murals')
    .update(req.body)
    .where({
      id: req.params.id
    })
    .then(() => {
      res.redirect(`/murals/${req.params.id}`);
    })
})

// route to delete an mural
router.delete('/:id', (req, res) => {
  knex('murals')
    .del()
    .where({
      id: req.params.id
    })
    .then(() => {
      res.redirect('/murals');
    })
})

module.exports = router
