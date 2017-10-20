exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('murals').del()
    .then(() =>
      // Inserts seed entries
      knex('murals').insert([
        {
          name: 'Hope Gallery', description: 'Graffiti park full of anonymous artists', artist_id: 1, neighborhood_id: 7, user_id: 1, latitude:30.28, longitude:-97.75
        },
        {
          name: 'Guide me home', description: "One of three large murals created during Austin's 2015 SXSW", artist_id: 2, neighborhood_id: 4, user_id: 1, latitude:30.27, longitude:-97.74
        },
        {
          name: 'Cisco', description: 'Large wide mural, spanning the distance of many buildings.', artist_id: 3, neighborhood_id: 5, user_id: 1, latitude:30.27, longitude:-97.76
        },
        {
          name: 'I love you so much', description: 'Very iconic Austin mural.', artist_id: 4, neighborhood_id: 4, user_id: 1, latitude:30.25, longitude: -97.75
        },
        {
          name: 'Jeep Masters', description: 'Large Mural on the wall of Capitol Body Shop.', artist_id: 4, neighborhood_id: 4, user_id: 1, latitude:30.23, longitude: -97.76
        },
        {
          name: 'Lets Band Together', description: 'A vivid heart full of instruments.', artist_id: 4, neighborhood_id: 5, user_id: 1, latitude:30.26, longitude: -97.72
        },
        {
          name: 'Lover Fighter', description: 'Crayons encompassing a heart.', artist_id: 4, neighborhood_id: 5, user_id: 1, latitude:30.26, longitude: -97.73
        },
        {
          name: 'Spirital Lady', description: 'Surrounded by viberant flowers.', artist_id: 4, neighborhood_id: 4, user_id: 1, latitude:30.25, longitude: -97.75
        },
        {
          name: 'Selena', description: 'Woman with a hat painted on viberant colors.', artist_id: 4, neighborhood_id: 5, user_id: 1, latitude:30.265, longitude: -97.735
        },
        {
          name: 'Till death do us part', description: 'Two skulls above a field of flowers.', artist_id: 4, neighborhood_id: 5, user_id: 1, latitude:30.27, longitude:  -97.73
        },
        {
          name: 'Checkers', description: 'Large Mural with a man holding an animal.', artist_id: 5, neighborhood_id: 4, user_id: 1, latitude:30.2705, longitude:  -97.7405
        },
        {
          name: 'Word to the Wise', description: 'Large Mural of an owl.', artist_id: 6, neighborhood_id: 4, user_id: 1, latitude:30.271, longitude:  -97.741
        },
      ]));
};
