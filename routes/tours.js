const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')
const userId = 2

// route to get artist list
router.get('/', (req, res) => {
  knex('tours-murals')
  .select('tours.id', 'toursMurals.tour_id', 'toursMurals.mural_id' 'murals.name as muralName', 'artists.name as artistName', 'murals.locationLat', 'murals.locationLong')
  .innerJoin('tours', 'tours-murals.tour_id', 'tours.id')
  .innerJoin('murals', 'tours-murals.mural_id', 'murals.id')
  .where('tours.user_id', userId)
  .then((toursMurals) => {
    res.render('/tours/index', {toursMurals});
  })
});

// route to post a new artist
router.post('/', (req, res) => {
  knex('tours')
  .insert(req.body)
  .then(() =>{
    res.redirect('/tours');
  })
})


// route to update an artist
router.patch('/:id', (req, res) => {
  knex('tours')
  .update(req.body)
  .where({id: req.params.id})
  .then(() =>{
    res.redirect('/tours');
  })
})

// route to delete an artist
router.delete('/:id', (req, res) => {
  knex('tours')
  .del()
  .where({id: req.params.id})
  .then(() =>{
    res.redirect('/tours/');
  })
})

module.exports = router
