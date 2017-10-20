const express = require('express');
const router = express.Router();
const knex = require('../db/knex')
const cloudinary = require('cloudinary');
require('dotenv').config();
// console.log(process.env.api_key);
cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
});

// route to get mural list
router.get('/', (req, res) => {
  let fetchedMurals = null;
  knex('murals')
    .then((murals) => {
      fetchedMurals = murals
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
      res.render('murals/index', {
        murals : fetchedMurals,
        imageList,
        user: req.session.user
      });
    });
});

//grabs the new mural page
router.get('/create', (req, res, next) => {
  knex('neighborhoods')
    // .select('name')
    .then((neighborhoods) => {
      knex('artists')
        // .select('name')
        .then((artists) => {
          res.render('murals/create', {
            neighborhoods,
            artists
          });
        })
    });
});


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
              knex('photos')
                .where({
                  mural_id: mural.id
                })
                .then((photos) => {
                  res.render('murals/show', {
                    mural,
                    artist,
                    neighborhood,
                    photos,
                    user : req.session.user
                  });
                });
            });
        });
    });
});

// route to post a new mural
router.post('/', (req, res) => {
  let newMural = {
    name: req.body.name,
    description: req.body.description,
    artist_id: parseInt(req.body.artist_id),
    neighborhood_id: parseInt(req.body.neighborhood_id),
    user_id: req.session.user.id,
    latitude: req.body.latitude,
    longitude: req.body.longitude
  }
  console.log(newMural);
  knex('murals')
    .insert(newMural)
    .then(() => {
      res.redirect('/murals');
    });
});

// route to update an mural
router.patch('/:id', (req, res) => {
  knex('murals')
    .update(req.body)
    .where({
      id: req.params.id
    })
    .then(() => {
      res.redirect(`/murals/${req.params.id}`);
    });
});

// route to delete an mural
router.delete('/:id', (req, res) => {
  knex('murals')
    .del()
    .where({
      id: req.params.id
    })
    .then(() => {
      res.redirect('/murals');
    });
});

module.exports = router
