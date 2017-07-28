const express = require('express');
const router = express.Router();
const stripe = require ("stripe")("sk_test_qqZDHIAgBZFr8pIlFLFQAOna");

router.post('/api', (req, res, next) => {
  var token = req.body.id; // Using Express
  var charge = stripe.charges.create({
    amount: req.body.amount * 100,
    currency: "usd",
    description: "Example charge",
    receipt_email: req.body.email,
    source: token,
  }, function(err, charge) {
    res.send(charge)
  });
});


module.exports = router;
