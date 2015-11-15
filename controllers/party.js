/**
 * GET /
 * Party page.
 */
exports.getParty = function(req, res) {
  res.render('party', {
    title: 'Party'
  });
};


exports.app = function(req, res) {
  res.render('app', {});
};