var exports = module.exports = {};
var secrets = require('./config/secrets');
var client = require('twilio')(secrets.twilio.accountSid, secrets.twilio.authToken);

function sendTwilioText(to, text) {
  client.sendMessage({
    to: to,
    from: '3109058652',
    body: text,
	}, function(err, responseData) {
	    if (!err) {
	        console.log(responseData.from);
	        console.log(responseData.body);
	    }
	});
}

function checkTwilioText() {
	client.messages.list(function(err, data) {
    data.messages.forEach(function(message) {
        console.log(message.body);
    });
	});
}

function makeTwilioCall(to, message) {
	client.makeCall({
    to:to,
    from: '3109058652',
    url: message,
	}, function(err, responseData) {
	    console.log(responseData.from);
	});
}

exports.twilioText = twilioText;
exports.checkTwilioText = checkTwilioText;
exports.makeTwilioCall = makeTwilioCall;
