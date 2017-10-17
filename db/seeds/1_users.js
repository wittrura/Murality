
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'ryan@ryan.com', hashed_password: 'abc'},
        {email: 'jayme@jayme.com', hashed_password: 'pickle'},
        {email: 'peter@peter.com', hashed_password: 'wubba'},
        {email: 'john@john.com', hashed_password: 'lubbadubdub'},
      ]);
    });
};
