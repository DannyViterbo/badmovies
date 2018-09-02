DROP DATABASE IF EXISTS ;

CREATE DATABASE movies;

USE movies;

CREATE TABLE  favorites (
    id int NOT NULL AUTO_INCREMENT,
    movie varchar(200) NOT NULL,
    rating DECIMAL(5) NOT NULL,
    year int(4) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    avatar VARCHAR(255) NOT NULL,
    FULLTEXT KEY (id)
);