
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tour_mural').del()
    .then(function () {
      // Inserts seed entries
      return knex('tour_mural').insert([
        {tour_id: 1, mural_id: 1, tour_stop: 1},
        {tour_id: 1, mural_id: 2, tour_stop: 4},
        {tour_id: 1, mural_id: 3, tour_stop: 2},
        {tour_id: 1, mural_id: 4, tour_stop: 3},
        {tour_id: 2, mural_id: 3, tour_stop: 1},
        {tour_id: 2, mural_id: 2, tour_stop: 2},
        {tour_id: 2, mural_id: 1, tour_stop: 3},
        {tour_id: 3, mural_id: 4, tour_stop: 1},
        {tour_id: 3, mural_id: 3, tour_stop: 2}
      ]);
    });
};
