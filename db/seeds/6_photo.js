
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photo').del()
    .then(function () {
      // Inserts seed entries
      return knex('photo').insert([
        {photoBlob: 'awodawodh', mural_id: 1, user_id: 1},
        {photoBlob: 'sefsefsef', mural_id: 2, user_id: 3},
        {photoBlob: 'werwerwerwe', mural_id: 3, user_id: 2},
        {photoBlob: 'bcxvbxcxcbxcbbxc', mural_id: 1, user_id: 2},
        {photoBlob: 'qweqweqwedqrqtr', mural_id: 4, user_id: 1}
      ]);
    });
};
