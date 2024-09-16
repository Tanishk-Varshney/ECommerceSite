const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AS2EgLpL2bvUih2pCkxKSHIvVPRWrjGw6tugh5wfSEniu1n6Gn0yYdkzMq0DUX7aC1y9hrOIAa6h4HwB",
  client_secret: "ECyKV9kD8c6-WLU9M_9D2XGI87DpezhtzuJJ0wVm8XLihMCKuc6z4Y1i-ZcetTQzm3Ee0oMmW6BqG2_T",
});

module.exports = paypal;
