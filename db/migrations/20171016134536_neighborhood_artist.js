exports.up = function (knex, Promise) {
  return knex.schema.createTable('neighborhood_artist', (table) => {
    table.increments();
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artist');
    table.integer('neighborhood_id')
      .notNullable()
      .references('id')
      .inTable('neighborhood');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('neighborhood_artist');
};
