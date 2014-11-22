var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var connection = mysql.createConnection({
  //host:
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect();

exports.addMessage = function() {

  var queryString = 'INSERT INTO messages (message, username, userID, room) values ("hello", "testUser", 1, "lobby")';

  // var queryString = 'insert into messages';
  // var post = {message: "hello1", username: "testUser", userID: 1, room: "lobby"};
  connection.query(queryString, function(err, res) {
    if (err) console.log(err)
    else  console.log('success')
    // res.send('success');
    console.log('This ran once again');
  });

  connection.end();
};


// exports.findMessages = function(callback) {
//   connection.query("SELECT message, username, room from messages", function(err, res){
//     if (err) {callback("error!"); }
//     else {
//       callback(res);
//     }
//   });
// };

