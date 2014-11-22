CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  message varchar(140),
  username varchar(20),
  userID int(6),
  room varchar(20)
  -- createdAt TIMESTAMP(6),
);

CREATE TABLE users (
  /* Describe the uses table */
  userID int(6),
  username varchar(20)
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

