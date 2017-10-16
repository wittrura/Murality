exports.up = function (knex, Promise) {
  return knex.schema.createTable('tour_mural', (table) => {
    table.increments();
    table.integer('tour_id')
      .notNullable()
      .references('id')
      .inTable('tour');
    table.integer('mural_id')
      .notNullable()
      .references('id')
      .inTable('mural');
    table.integer('tour_stop');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tour_mural');
};
