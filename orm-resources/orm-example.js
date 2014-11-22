/* You'll need to
 * npm install sequelize
 * before running this example. Documentation is at http://sequelizejs.com/
 */

var Sequelize = require("sequelize");
var sequelize = new Sequelize("chatter", "root", "", {
  dialect: "mysql",
  port: 3000
});

sequelize
  .authenticate()
  .complete(function(err) {
    if (!!err) {
      console.log('Unable to connect to the database:', err);
    } else {
      console.log('Connection has been established successfully.');
    }
  });

/* TODO this constructor takes the database name, username, then password.
 * Modify the arguments if you need to */

/* first define the data structure by giving property names and datatypes
 * See http://sequelizejs.com for other datatypes you can use besides STRING. */
var Users = sequelize.define('Users', {
  username: Sequelize.STRING
});

var Messages = sequelize.define('Messages' {
  messages: Sequelize.STRING,
  roomname: Sequelize.STRING,
  username: Sequelize.STRING
});

/* .sync() makes Sequelize create the database table for us if it doesn't
 *  exist already: */
Users.sync().success(function() {
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  var newUser = User.build({username: "Jean Valjean"});
  newUser.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
    User.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {
      // This function is called back with an array of matches.
      for (var i = 0; i < usrs.length; i++) {
        console.log(usrs[i].username + " exists");
      }
    });
  });
});

Messages.sync()
  /* This callback function is called once sync succeeds. */

  // now instantiate an object and save it:
  var newMessage = Message.build({message: "aMessage", username: "Jean Valjean", roomname: "main"});
  newMessage.save().success(function() {

    /* This callback function is called once saving succeeds. */

    // Retrieve objects from the database:
    Message.findAll({ where: {username: "Jean Valjean"} }).success(function(usrs) {
      // This function is called back with an array of matches.
      for (var i = 0; i < usrs.length; i++) {
        console.log(usrs[i].username + " exists");
      }
    });
  });
});
