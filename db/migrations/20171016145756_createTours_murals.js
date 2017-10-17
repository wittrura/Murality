exports.up = function (knex, Promise) {
  return knex.schema.createTable('tours_murals', (table) => {
    table.increments();
    table.integer('tour_id')
      .notNullable()
      .references('id')
      .inTable('tours');
    table.integer('mural_id')
      .notNullable()
      .references('id')
      .inTable('murals');
    table.integer('tour_stop');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tours_murals');
};
