
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('neighborhood').del()
    .then(() =>
      // Inserts seed entries
      knex('neighborhood').insert([
        { name: 'Hyde Park', area: 'North Central' },
        { name: 'Mueller', area: 'North Central' },
        { name: 'Campus', area: 'North Central' },
        { name: 'South Congress', area: 'South Central' },
        { name: 'East 6th District', area: 'East Central' },
        { name: 'Rosedale', area: 'North Central' },
        { name: 'Tarrytown', area: 'West Central' },
      ]));
};
