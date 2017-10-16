exports.up = function (knex, Promise) {
  return knex.schema.createTable('neighborhood', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('area').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('neighborhood');
};
