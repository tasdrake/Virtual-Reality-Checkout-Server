const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_qqZDHIAgBZFr8pIlFLFQAOna');
const knex = require('./knex')
router.post('/api', (req, res, next) => {
  var token = req.body.id;
  var charge = stripe.charges.create({
    amount: req.body.amount * 100,
    currency: "usd",
    description: "Example charge",
    receipt_email: req.body.email,
    source: token,
  }, function(err, charge) {
    knex('donation')
      .insert({
        card_token: charge.id,
        amount: charge.amount
      })
      .returning('*')
      .then((donation) => {
        knex('donors')
          .insert({
            firstName: charge.firstName,
            lastName: charge.lastName,
            email: charge.email,
            donation_id: donation.id
          })
          .then(() => res.send('Donation Posted'));
      });
    res.send(charge);
  });
});

module.exports = router;
