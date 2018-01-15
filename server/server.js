require('dotenv').config();

const express = require('express'),
      bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

var stripe = require("stripe")(process.env.SECRET_KEY);

var token;

app.post('/charge', function(req, res, next) {
  var amount = parseInt(req.body.amount);
  var token = req.body.stripeToken;
  stripe.charges.create({
    amount: amount,
    currency: "usd",
    description: "Example charge",
    source: token,
  }, function(err, charge) {
    console.log(charge)
  });
});

// app.post('/test', function(req, res) {
//   console.log(req.body);
// });

// var token = request.body.stripeToken; // Using Express
// console.log(token);



  app.listen(3030, function() {
    console.log('listening port 3030....');
  });