const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(functions.config().sendgrid.apikey);

const app = express();
app.use(cors({ origin: "*" }));

const fromEmail = functions.config().sendgrid.emailfrom;
const toEMail = functions.config().sendgrid.emailto;

/** Send Email -- SUBSCRIBER */
app.post("/subscriber-email", (req, res) => {
  res.header("Content-Type", "application/json");
  let AdminEmailConfig = {
    to: [fromEmail, toEMail],
    from: fromEmail,
    subject: "Subscribe",
    html: req.body.email,
  };

  let UserEmailConfig = {
    to: req.body.email,
    from: fromEmail,
    subject: "Thank you subscribing to our newsletter.",
    html:
      "Hello," +
      "<br /><br />" +
      "Thank you for showing interest in Fashone." +
      "<br /><br />" +
      "You are part of powerful network with revolutionary fashion technology." +
      "<br /><br />" +
      "We are aiming to change the fashion world for better with deep focus on sustainability, personalisation, AI and much more." +
      "<br /><br />" +
      "Stay connected for more information!" +
      "<br /><br />" +
      "Greetings," +
      "<br />" +
      "Fashone Team.",
  };

  (async () => {
    try {
      await sgMail.send(AdminEmailConfig);
      await sgMail.send(UserEmailConfig);
      response.set("Access-Control-Allow-Origin", "*");
      res.status(200).send(JSON.stringify({ success: true }));
    } catch (error) {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
});

/** Send Email -- Fashionista */
app.post("/fashionista-email", (req, res) => {
  res.header("Content-Type", "application/json");
  let AdminEmailConfig = {
    to: [fromEmail, toEMail],
    from: fromEmail,
    subject: "Fashionista Register",
    html:
      "Name: " +
      req.body.name +
      " (Fashionista)<br />" +
      "Email: " +
      req.body.email +
      "<br /> " +
      "Socialmedia: " +
      req.body.socialmedia,
  };

  let UserEmailConfig = {
    to: req.body.email,
    from: fromEmail,
    subject: "Thank You for Registering as Fashionista with Fashone.",
    html:
      "Hello " +
      req.body.name +
      "," +
      "<br /><br />" +
      "You got into our limited beta list!" +
      "<br /><br />" +
      "Thank you for showing interest in Fashone." +
      "<br /><br />" +
      "Due to Covid-19 we know many fashion businesses are being affected but don’t worry we are here to help you for making your business online and earn at faster pace." +
      "<br /><br />" +
      "Stay connected for more information!" +
      "<br /><br />" +
      "Greetings," +
      "<br />" +
      "Fashone Team.",
  };

  (async () => {
    try {
      await sgMail.send(AdminEmailConfig);
      await sgMail.send(UserEmailConfig);
      res.status(200).send(JSON.stringify({ success: true }));
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
});

/** Send Email -- Fashion Seeker Registration */
app.post("/fashion-register-email", (req, res) => {
  res.header("Content-Type", "application/json");
  let AdminEmailConfig = {
    to: [fromEmail, toEMail],
    from: fromEmail,
    subject: "Fashion Seeker Register",
    html:
      "Name: " +
      req.body.name +
      " (Fashion Seeker)<br />" +
      "Email: " +
      req.body.email,
  };

  let UserEmailConfig = {
    to: req.body.email,
    from: fromEmail,
    subject: "Thank You for Registering with Fashone.",
    html:
      "Hello " +
      req.body.name +
      "," +
      "<br /><br />" +
      "Thank you for showing interest in Fashone." +
      "<br /><br />" +
      "We will help you find exiting fashionistas around the globe to solve your fashion, beauty and styling problems online." +
      "<br /><br />" +
      "Stay connected for more information!" +
      "<br /><br />" +
      "Greetings," +
      "<br />" +
      "Fashone Team.",
  };

  (async () => {
    try {
      await sgMail.send(AdminEmailConfig);
      await sgMail.send(UserEmailConfig);
      res.status(200).send(JSON.stringify({ success: true }));
    } catch (error) {
      console.error(error);

      if (error.response) {
        console.error(error.response.body);
      }
    }
  })();
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.api = functions.https.onRequest(app);
