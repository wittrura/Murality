// TODO review for deleting

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('neighborhoods_artists').del()
    .then(() =>
      // Inserts seed entries
      knex('neighborhoods_artists').insert([
        { artist_id: 1, neighborhood_id: 1 },
      ]));
};
