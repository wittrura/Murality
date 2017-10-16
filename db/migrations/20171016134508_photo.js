exports.up = function (knex, Promise) {
  return knex.schema.createTable('photo', (table) => {
    table.increments();
    table.string('photoBlob').notNullable().defaultTo('');
    table.integer('mural_id')
      .notNullable()
      .references('id')
      .inTable('mural')
      .onDelete('CASCADE');
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('user');
    table.timestamps(true, true);
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('photo');
};
