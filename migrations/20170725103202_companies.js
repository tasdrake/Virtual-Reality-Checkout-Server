exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('stripe_id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('companies');
};
