exports.up = function (knex, Promise) {
  return knex.schema.createTable('mural', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('description');
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artist');
    table.integer('neighborhood_id')
      .notNullable()
      .references('id')
      .inTable('neighborhood');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('user');
    table.string('latitude').notNullable().defaultTo('');
    table.string('longitude').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('mural');
};
