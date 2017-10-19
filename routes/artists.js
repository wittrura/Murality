const express = require('express');
const router = express.Router();
const knex = require('../db/knex')

// route to get artist list
router.get('/', (req, res) => {
  knex('artists')
    .then((artists) => {
      res.render('artists/index', {
        artists
      });
    })
});
router.get('/create', (req, res) => {
  knex('neighborhoods')
    // .select('name')
    .then((neighborhoods) => {
      knex('murals')
        // .select('name')
        .then((murals) => {
          console.log(murals, neighborhoods)
          res.render('artists/create', {
            neighborhoods,
            murals
          });
        });
    });
});
router.get('/:id/edit', (req, res) => {
  knex('artists')
    .where({
      id: req.params.id
    })
    .first()
    .then((artist) => {
      res.render('artists/edit', {
        artist,
      });
    });
});

// route to get an individual artist
router.get('/:id', (req, res) => {
  let artist = null;
  knex('artists')
    .where({
      id: req.params.id
    })
    .first()
    .then((fetchedArtist) => {
      artist = fetchedArtist;
      return knex('murals')
        .where({
          artist_id: artist.id
        });
    })
    .then((murals) => {
      let imageList = [];
      return murals.map(mural => {
        return knex('photos')
          .where({
            mural_id: mural.id
          }).first()
          .then((photo) => {
            return photo;
          });
      });
    })
    .then((muralPromises) => {
      return Promise.all(muralPromises);
    })
    .then((imageList) => {
      res.render('artists/show', {
        artist,
        imageList
      });
    });
});



// route to post a new artist
router.post('/', (req, res) => {
  let newArtist = {
    name: req.body.name,
    bio: req.body.bio,
    user_id: 1
  };
  console.log(req.body)
  knex('artists')
    .insert(newArtist)
    .then(() => {
      res.redirect('/artists');
    });
});


// route to update an artist
router.patch('/:id', (req, res) => {
  console.log(req.body);
  knex('artists')
    .update(req.body)
    .where({
      id: req.params.id
    })
    .then(() => {
      res.redirect('/artists');
    });
});

// route to delete an artist
router.delete('/:id', (req, res) => {
  knex('artists')
    .del()
    .where({
      id: req.params.id
    })
    .then(() => {
      res.redirect('/artists');
    });
});



module.exports = router;
