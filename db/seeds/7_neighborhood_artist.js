// TODO review for deleting

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('neighborhood_artist').del()
    .then(() =>
      // Inserts seed entries
      knex('neighborhood_artist').insert([
        { artist_id: 1, neighborhood_id: 1 },
      ]));
};
