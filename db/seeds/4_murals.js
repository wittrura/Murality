
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('murals').del()
    .then(() =>
      // Inserts seed entries
      knex('murals').insert([
        {
          name: 'Hope_Gallery', description: 'just what it sounds like', photo_count: 24, artist_id: 1, neighborhood_id: 3, user_id: 1, latitude:30.28, longitude:-97.75
        },
        {
          name: 'Water_Girl', description: 'She seems to be having a good time', photo_count: 2, artist_id: 2, neighborhood_id: 2, user_id: 2, latitude:30.27, longitude:-97.74
        },
        {
          name: 'Cisco', description: 'Much better than selena gomez', photo_count: 3, artist_id: 3, neighborhood_id: 1, user_id: 1, latitude:30.27, longitude:-97.76
        },
      ]));
};
