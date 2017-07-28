const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_qqZDHIAgBZFr8pIlFLFQAOna');
const knex = require('./knex')
router.post('/api', (req, res, next) => {
  var token = req.body.id;
  var body = req.body;
  knex('donation')
  .insert({
    card_token: body.id,
    amount: body.amount
  })
  .returning('*')
  .then((donation) => {
    knex('donors')
    .insert({
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      donation_id: donation.id
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
