CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  messageID MEDIUMINT NOT NULL AUTO_INCREMENT,
  message varchar(140),
  username varchar(20),
  room varchar(20),
  PRIMARY KEY (messageID),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE users (
  /* Describe the uses table */
  userID MEDIUMINT NOT NULL AUTO_INCREMENT,
  username varchar(20),
  PRIMARY KEY (userID)
);
CREATE TABLE followings (
  /* Describe the relationship between users */
  primaryuserID int(6),
  followerID int(6)
);
/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/

