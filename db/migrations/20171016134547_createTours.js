exports.up = function (knex, Promise) {
  return knex.schema.createTable('tours', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tours');
};
