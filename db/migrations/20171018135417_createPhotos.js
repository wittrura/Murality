
exports.up = function(knex, Promise) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.string('url').notNullable().defaultTo('');
    table.integer('mural_id')
      .notNullable()
      .references('id')
      .inTable('murals');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('photos');
};
