 use exampledb;

DROP TABLES if exists profile ;
    
CREATE TABLE profile (
id int(11) NOT NULL AUTO_INCREMENT,  
 username varchar(255) ,
 first_name VARCHAR(75) ,
 flight VARCHAR(75) ,
 hotel_inf varchar(255) ,
 hotel_r varchar(255),
 list varchar(255) ,
 activity varchar(255) ,
comment1 varchar(255) ,

 updated_at datetime NOT NULL,
 PRIMARY KEY (id)) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
  