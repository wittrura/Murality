const express = require('express');
const router = express.Router();
const knex = require ('../db/knex')
const userId = 2

var googleMapsClient = require('@google/maps').createClient({
  key: 'AIzaSyCWZ7QSSFjfBAECc_XNeQZ4q93CH5yemcs'
});


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
    res.render('tours/index', {toursMurals});
  });
});


//
router.get('/new', (req, res) => {
  res.render('tours/new', {results : null})
});


// submit request for a new tour
router.post('/', (req, res) => {
  // console.log(req.body);
  let origin;

  // geocode the address entered by the user in the form
  googleMapsClient.geocode({
    address: req.body.origin
  }, function(err, response) {
    if (!err) {
      // store this address to be the origin for distance calculations
      origin = response.json.results[0].formatted_address;
    }

    let destinations = [];
    let allMurals = [];
    // store each mural's lat/lng in an array for distance calculations
    knex('murals')
      .then((murals) => {
        murals.forEach((mural) => {
          destinations.push(`${mural.latitude}, ${mural.longitude}`);
          allMurals.push(mural);
        });

        googleMapsClient.distanceMatrix({
          origins: [origin],
          destinations: destinations,
          units: 'metric'
        }, function(err, response) {
          if (!err) {
            // distance in meters
            response.json.rows[0].elements.forEach((element, i) => {
              // update stored murals values with distance property
              allMurals[i].distance = element.distance.value;
            });


            let filteredResults = [];
            // filter all murals down to only those within the user-specified distance
            allMurals.forEach((mural) => {
              if (mural.distance < req.body.maxDistanceKm * 1000) {
                filteredResults.push(mural);
              }
            });

            res.render('tours/new', {results: filteredResults})
          }
        });
      });
  });

  // knex('tours')
  //   .insert(req.body)
  //   .then(() =>{
  //     res.redirect('/tours');
  //   });
  // res.redirect('/tours/new');
});


// route to update an artist
// router.patch('/:id', (req, res) => {
//   knex('tours')
//   .update(req.body)
//   .where({id: req.params.id})
//   .then(() =>{
//     res.redirect('/tours');
//   })
// })

// route to delete an artist
// router.delete('/:id', (req, res) => {
//   knex('tours')
//   .del()
//   .where({id: req.params.id})
//   .then(() =>{
//     res.redirect('/tours');
//   })
// })

module.exports = router
