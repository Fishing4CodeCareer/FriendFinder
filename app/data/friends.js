DROP DATABASE IF EXISTS friendsDB;

CREATE DATABASE friendsDB;

USE friendsDB;

CREATE TABLE  newfriend (
 id  INT NOT NULL AUTO_INCREMENT,
 name VARCHAR(30) NOT NULL,
  title VARCHAR(60) NOT NULL,
  image VARCHAR(50) NOT NULL,
  Q1 VARCHAR(20) NOT NULL,
  Q2 VARCHAR(20) NOT NULL,
  Q3 VARCHAR(20) NOT NULL,
  Q4 VARCHAR(20) NOT NULL,
  Q5 VARCHAR(20) NOT NULL,
  Q6 VARCHAR(20) NOT NULL,
  Q7 VARCHAR(20) NOT NULL,
  Q8 VARCHAR(20) NOT NULL,
  Q9 VARCHAR(20) NOT NULL,
  Q10 VARCHAR(20) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO newfriend(name, title, image, Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10);
VALUES ( "Guns and Roses", "Welcome to the Jungle",  "Guns and Roses", "Rock");
SELECT * from newfriend; 