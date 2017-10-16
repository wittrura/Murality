
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(() =>
      // Inserts seed entries
      knex('table_name').insert([
        {
          name: 'Big Eye', description: 'just what it sounds like', artist_id: 1, neighborhood_id: 3, user_id: 1,
        },
        {
          name: 'Spiritual Lady', description: 'She seems to be having a good time', artist_id: 2, neighborhood_id: 2, user_id: 2,
        },
        {
          name: 'Selena', description: 'Much better than selena gomez', artist_id: 3, neighborhood_id: 1, user_id: 1,
        },
        {
          name: 'Mural Collage', description: 'Lots of murals', artist_id: 4, neighborhood_id: 3, user_id: 2,
        },
        {
          name: 'Hands and Bees', description: 'They do not normally go together', artist_id: 1, neighborhood_id: 4, user_id: 3,
        },
      ]));
};
