exports.up = function (knex, Promise) {
  return knex.schema.createTable('neighborhoods_artists', (table) => {
    table.increments();
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artists');
    table.integer('neighborhood_id')
      .notNullable()
      .references('id')
      .inTable('neighborhoods');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('neighborhoods_artists');
};
