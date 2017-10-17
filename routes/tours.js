const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')
const userId = 2

// route to get artist list
router.get('/', (req, res) => {
  knex('tours_murals')
  .select('tours.id', 'tours_murals.tour_id', 'tours_murals.mural_id', 'tours_murals.tour_stop', 'murals.name as muralName', 'artists.name as artistName', 'murals.latitude', 'murals.longitude')
  .innerJoin('tours', 'tours_murals.tour_id', 'tours.id')
  .innerJoin('murals', 'tours_murals.mural_id', 'murals.id')
  .innerJoin('artists', 'murals.artist_id', 'artists.id')
  .where('tours.user_id', userId)
  .orderBy('tours_murals.tour_id', 'asc')
  .orderBy('tours_murals.tour_stop', 'asc')
  .then((toursMurals) => {
    res.send(toursMurals);
    //res.render('tours/index', {toursMurals});
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
    res.redirect('/tours');
  })
})

module.exports = router
