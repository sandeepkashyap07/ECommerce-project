const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AZikxYGDEdAUC9nslHzWqq4CbfoZ6DsmScuqA8l_A9wXqh7CAp-kWVea_JLO147-XniA-ePDiZZqYhUI",
  client_secret: "EMDgYH8jLFimkkzdVWauj_5710a8RmSJNhpRAD-52wN0KH8OMt_kONdtEwIE3TUWbqYxF1E-29D32Oqj",
});

module.exports = paypal;
