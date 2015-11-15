var Parse = require('node-parse-api').Parse;
var APP_ID = 'zAL9zruuX9Kt1gAtFwq85qMskdydT0bs74im9Wpu';
var MASTER_KEY = 'oHYOc2QbMYajacdbDdbfQpGl8IBvSlR6IGrBgQrB';
var app = new Parse(APP_ID, MASTER_KEY);



// app.insert('Foo', { foo: 'bar' }, function (err, response) {
//   var res = response;
//   var objId = res.objectId;
//   app.find('Foo', {objectId: objId}, function (err, response) {
//     console.log(response);
//   });
// });


// userId - user id
// phone - user phone number
// emergency1 - emergency phone number 1
// emergency2 - emergency phone number 2
module.exports.saveContacts = function(data, cb) {
  app.insert('Contacts', data, function (err, res) {
    cb(err, res);
  });
};
