/**
 * GET /
 * Party page.
 */
exports.getParty = function(req, res) {
  res.render('party', {
    title: 'Party'
  });
};


exports.getPartyYes = function(req, res) {
  res.render('partyYes', {
    title: 'PartyYes'
  });
};

exports.getModeHappy = function(req, res) {
  res.render('modeHappy', {
    title: 'ModeHappy'
  });
};