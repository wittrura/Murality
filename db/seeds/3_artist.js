
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('artist').del()
    .then(() =>
      // Inserts seed entries
      knex('artist').insert([
        { name: 'Federico', bio: 'A cool guy', user_id: 1 },
        { name: 'Lucas Aoki', bio: 'Not related to steve', user_id: 1 },
        { name: 'Mez Data', bio: 'The best kind of data', user_id: 1 },
        { name: 'RTL', bio: '', user_id: 2 },
      ]));
};
