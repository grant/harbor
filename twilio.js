var exports = module.exports = {};
var secrets = require('./config/secrets');
var client = require('twilio')(secrets.twilio.accountSid, secrets.twilio.authToken);
var Parse = require('node-parse-api').Parse;
var APP_ID = 'zAL9zruuX9Kt1gAtFwq85qMskdydT0bs74im9Wpu';
var MASTER_KEY = 'oHYOc2QbMYajacdbDdbfQpGl8IBvSlR6IGrBgQrB';
var app = new Parse(APP_ID, MASTER_KEY);

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
	client.calls.create({
    to:to,
    from: '3109058652',
    url: "/voice.xml",
    statusCallback: "https://www.myapp.com/voice",
    statusCallbackMethod: "POST",
	}, function(err, responseData) {
	    console.log(responseData.from);
	});
}

exports.sendTwilioText = sendTwilioText;
exports.checkTwilioText = checkTwilioText;
exports.makeTwilioCall = makeTwilioCall;
