var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

exports.addMessage = function(reqBody) {

  var queryString = 'insert into messages set ?';
  var post = {message: reqBody.message, username: reqBody.username, room: reqBody.roomname};
  connection.query(queryString, post, function(err, res) {
    if (err) { console.log(err); }
    else  { console.log('success adding to database'); }
  });



};

exports.retrieveMessages = function(result) {
  var queryString = 'SELECT * from messages';
  connection.query(queryString, function(err, res) {
    if (err) { console.log(err); }
    else  { result.send(res) }
  });

};

