const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_qqZDHIAgBZFr8pIlFLFQAOna');
const knex = require('./knex')
router.post('/api', (req, res, next) => {
  var token = req.body.id;
  var body = req.body;
  knex('donations')
  .insert({
    card_token: body.id,
    amount: body.amount
  })
  .returning('*')
  .then((donation) => {
    console.log('logging inside knex:', donation, body)
    knex('donors')
    .insert({
      firstName: 'sean',
      lastName: req.body.lastName,
      email: req.body.email,
      donation_id: donation[0].id
    })
    .then(() => res.send('Donation Posted'));
  });
  var charge = stripe.charges.create({
    amount: req.body.amount * 100,
    currency: "usd",
    description: "Example charge",
    receipt_email: req.body.email,
    source: token,
  }, function(err, charge) {
    res.send(charge);
  });
});


module.exports = router;
