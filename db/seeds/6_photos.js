exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('photos').insert([
        {photoBlob: 'http://res.cloudinary.com/murality/image/upload/c_scale,h_1080/v1508254842/20171015_111422_ud7ji1.jpg', mural_id: 1, user_id: 1},
        {photoBlob: 'sefsefsef', mural_id: 2, user_id: 3},
        {photoBlob: 'werwerwerwe', mural_id: 3, user_id: 2},
        {photoBlob: 'bcxvbxcxcbxcbbxc', mural_id: 1, user_id: 2},
        {photoBlob: 'qweqweqwedqrqtr', mural_id: 4, user_id: 1}
      ]);
    });
};
