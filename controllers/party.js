var partyModel = require('../models/party');

/**
 * GET /
 * Party page.
 */
exports.getParty = function(req, res) {
  res.render('party', {
    title: 'Party',
    profile: req.user.profile.picture
  });
};

exports.getPartyYes = function(req, res) {
  partyModel.startParty(req.user._id);
  res.render('partyYes', {
    title: 'PartyYes'
  });
};

exports.getModeHappy = function(req, res) {
  res.render('modeHappy', {
    title: 'ModeHappy'
  });
};

exports.getModeWorried = function(req, res) {
  res.render('modeWorried', {
    title: 'ModeWorried'
  });
};