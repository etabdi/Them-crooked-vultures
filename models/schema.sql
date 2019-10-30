-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE exampledb;

-- DROP DATABASE IF EXISTS testdb;
-- CREATE DATABASE testdb;
DROP DATABASE IF EXISTS exampledb;


CREATE DATABASE exampledb;
use exampledb;
    
use exampledb;
    
CREATE TABLE accounts (
id int(11) NOT NULL AUTO_INCREMENT,
 first_name VARCHAR(75) NOT NULL,
 last_name VARCHAR(75) NOT NULL,
 username varchar(255) NOT NULL,
 password varchar(255) NOT NULL,
 email varchar(255) NOT NULL,
 created_at datetime NOT NULL,
 updated_at datetime NOT NULL,
 PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
 
