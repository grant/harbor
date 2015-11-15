// Party Monster
var Parse = require('node-parse-api').Parse;
var APP_ID = 'zAL9zruuX9Kt1gAtFwq85qMskdydT0bs74im9Wpu';
var MASTER_KEY = 'oHYOc2QbMYajacdbDdbfQpGl8IBvSlR6IGrBgQrB';
var app = new Parse(APP_ID, MASTER_KEY);
var twilio = require('../twilio.js');
var voice = require('../routes/voice.js');

module.exports.startParty = function(userId) {
	setTimeout(function() {
		//start interview process
		//http://www.poetryfoundation.org/poem/171621
		var phone;
		app.find('Contacts', {userId: userId}, function(err, response) {
			twilio.makeTwilioCall(response.phone);
		});
		console.log('party!');
	}, 5 * 1000);
};