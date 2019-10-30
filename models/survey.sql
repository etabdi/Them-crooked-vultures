-- use exampledb;

-- DROP TABLES if exists servey ;
    
-- CREATE TABLE survey (
-- id int(11) NOT NULL AUTO_INCREMENT,
--  first_name VARCHAR(75) NOT NULL,
--  last_name VARCHAR(75) NOT NULL,
--  username varchar(255) NOT NULL,
--  email varchar(255) NOT NULL,
--  origin varchar(255) NOT NULL,
--  destination varchar(255) NOT NULL,
--  begintrip varchar(255) NOT NULL,
--  created_at datetime NOT NULL,
--  updated_at datetime NOT NULL,
--  PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
 use exampledb;

DROP TABLES if exists survey ;
    
CREATE TABLE survey (
id int(11) NOT NULL AUTO_INCREMENT,  ,
 username varchar(255) ,
 date VARCHAR(75) ,
 last_name VARCHAR(75) ,
 email varchar(255) ,
 origin varchar(255),
 destination varchar(255) ,
 begintrip varchar(255) ,
 created_at datetime NOT NULL,
 updated_at datetime NOT NULL,
 PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
 