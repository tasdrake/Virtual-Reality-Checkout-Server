exports.up = function(knex, Promise) {
  return knex.schema.createTable('donations', (table) => {
    table.increments('id');
    table.integer('amount').notNullable();
    table.integer('video_id').notNullable();
    table.string('card_token').notNullable();
    table.integer('company_id').index().references('companies.id').onDelete('CASCADE').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('donations');
};
