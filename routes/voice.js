var twilio = require('../twilio.js');

// Main interview loop
exports.interview = function() {
    twilio.getTwilioTranscripts();
};
