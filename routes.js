const express = require('express');
const router = express.Router();
const stripe = require ("stripe")("sk_test_qqZDHIAgBZFr8pIlFLFQAOna")

router.post('/', (req,res,next)=>{
  var token = req.body.id; // Using Express
  var charge = stripe.charges.create({
    amount: 1000,
    currency: "usd",
    description: "Example charge",
    receipt_email: 'sean.eich@gmail.com',
    source: token,
  }, function(err, charge) {
    res.send(charge)
  });
})

module.exports = router;
