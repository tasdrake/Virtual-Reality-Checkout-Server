exports.up = function(knex, Promise) {
  return knex.schema.createTable('headsetDonation', (table) => {
    table.increments('id');
    table.integer('amount').notNullable();
    table.integer('kiosk').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('headsetDonation')
};
