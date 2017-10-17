exports.up = function (knex, Promise) {
  return knex.schema.createTable('artists', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('bio');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('artists');
};
