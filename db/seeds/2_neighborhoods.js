
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('neighborhoods').del()
    .then(() =>
      // Inserts seed entries
      knex('neighborhoods').insert([
        { name: 'Hyde Park', area: 'North Central' },
        { name: 'Mueller', area: 'North Central' },
        { name: 'Campus', area: 'North Central' },
        { name: 'South Congress', area: 'South Central' },
        { name: 'East 6th District', area: 'East Central' },
        { name: 'Rosedale', area: 'North Central' },
        { name: 'Tarrytown', area: 'West Central' },
        { name: 'Domain', area: 'North' },
        { name: 'South Park Meadows', area: 'South' },
      ]));
};
