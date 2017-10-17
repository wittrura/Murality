
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('murals').del()
    .then(() =>
      // Inserts seed entries
      knex('murals').insert([
        {
          name: 'Hope_Gallery', description: 'just what it sounds like', artist_id: 1, neighborhood_id: 3, user_id: 1,
        },
        {
          name: 'Water_Girl', description: 'She seems to be having a good time', artist_id: 2, neighborhood_id: 2, user_id: 2,
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
