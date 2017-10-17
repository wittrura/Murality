exports.up = function (knex, Promise) {
  return knex.schema.createTable('murals', (table) => {
    table.increments();
    table.string('name').notNullable().defaultTo('');
    table.string('description');
    table.integer('photo_count');
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('artists');
    table.integer('neighborhood_id')
      .notNullable()
      .references('id')
      .inTable('neighborhoods');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table.string('latitude').notNullable().defaultTo('');
    table.string('longitude').notNullable().defaultTo('');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('murals');
};
