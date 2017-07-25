exports.up = function(knex, Promise) {
  return knex.schema.createTable('donors', (table) => {
    table.increments('id');
    table.string('firstName').notNullable();
    table.string('lastName').notNullable();
    table.string('email').notNullable();
    table.integer('donation_id').index().references('donations.id').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donors')
};
