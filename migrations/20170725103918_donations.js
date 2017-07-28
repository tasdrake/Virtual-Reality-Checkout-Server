exports.up = function(knex, Promise) {
  return knex.schema.createTable('donations', (table) => {
    table.increments('id');
    table.string('card_token').notNullable();
    table.integer('amount').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donations');
};
