use exampledb;

DROP TABLES if exists survey ;
    
CREATE TABLE survey (
   id int(11) NOT NULL AUTO_INCREMENT,
 username varchar(255) ,
 first_name VARCHAR(275) ,
 last_name VARCHAR(275) ,
 email varchar(255) ,
 origin varchar(255),
 destination varchar(255) ,
 begintrip varchar(255) ,
  created_at datetime NOT NULL,
  updated_at datetime NOT NULL,
 PRIMARY KEY (id)) 
 
 