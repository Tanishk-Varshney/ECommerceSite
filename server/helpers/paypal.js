const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AU3xqvHhpb1hMVxNDQnEKUfxVOPurIusog5G2n2wt6ELGbLPw79KO1dfuj_RAjelMG2W_HWpwa-rdyJW",
  client_secret:
    "EBmbNqPx81_b8HthAnBmWBiPIMjRmcAnW291Pq88jaOLCgaAFc8n8E0TWLwb0H9z0stzriFIOxjbKFz_",
});

module.exports = paypal;
