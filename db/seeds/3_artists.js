
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('artists').del()
    .then(() =>
      // Inserts seed entries
      knex('artists').insert([
        { name: 'Unknown', bio: 'Unidentifiable works of art.', user_id: 1 },
        { name: 'Federico', bio: 'A cool guy', user_id: 1 },
        { name: 'Lucas Aoki', bio: 'Not related to steve', user_id: 1 },
        { name: 'Mez Data', bio: 'The best kind of data', user_id: 1 },
        { name: 'RTL', bio: '', user_id: 2 },
      ]));
};
