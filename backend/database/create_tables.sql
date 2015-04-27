CREATE TABLE user (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(128),
    email VARCHAR(128)
);

CREATE TABLE scores (
    user_id PRIMARY KEY,
    score DOUBLE,
);