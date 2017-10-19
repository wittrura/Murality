
exports.up = function(knex, Promise) {
  return knex.schema.table('murals', (table) => {
    table.dropColumn('photo_count');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table('murals', (table) => {
    table.integer('photo_count');
  });
};
