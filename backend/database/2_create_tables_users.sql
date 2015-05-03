-- UP
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY auto_increment,
    name VARCHAR(128),
    email VARCHAR(128),
    score DOUBLE
);

--DOWN
DROP TABLE IF EXISTS users