var secrets = require('../config/secrets');
var nodemailer = require("nodemailer");
var transporter = nodemailer.createTransport({
  service: 'SendGrid',
  auth: {
    user: secrets.sendgrid.user,
    pass: secrets.sendgrid.password
  }
});

/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = function(req, res) {
  res.render('contact', {
    title: 'Contact'
  });
};

/**
 * POST /contact
 * Send a contact form via Nodemailer.
 */
exports.postContact = function(req, res) {
  req.assert('phone', 'Cannot be blank').notEmpty();
  req.assert('emergency1', 'Not a Real Number').notEmpty();
  req.assert('emergency2', 'Not a Real Number').notEmpty();

  var errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/contact');
  }

  var phone = req.body.phone;
  var emergency1 = req.body.emergency1;
  var emergency2 = req.body.emergency2;

  // save

  res.redirect('/party');
};

