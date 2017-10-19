exports.up = function(knex, Promise) {
  return knex.schema.table('artists', (table) => {
    table.dropColumn('bio');
  }).then(() => {
    return knex.schema.table('artists', (table) => {
      table.text('bio');
    })
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('artists', (table) => {
    table.dropColumn('bio');
  }).then(() => {
    return knex.schema.table('artists', (table) => {
      table.string('bio');
    })
  });
};
