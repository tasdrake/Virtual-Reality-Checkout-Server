exports.seed = function(knex, Promise) {
  return knex('companies').del()
    .then(function () {
      return knex('companies').insert([
        {id: 1, name: 'Wildlife Protection Solutions', stripe_id: 'something'}
      ]);
    }).then(() => {
      return knex.raw("SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies))");
    });;
};
