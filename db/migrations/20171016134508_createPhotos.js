exports.up = function (knex, Promise) {
  return knex.schema.createTable('photos', (table) => {
    table.increments();
    table.string('photoBlob').notNullable().defaultTo('');
    table.integer('mural_id')
      .notNullable()
      .references('id')
      .inTable('murals')
      .onDelete('CASCADE');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('photos');
};
