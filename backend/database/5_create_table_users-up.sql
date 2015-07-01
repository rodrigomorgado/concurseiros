-- UP
CREATE TABLE IF NOT EXISTS usuarios (
    idusuario INT PRIMARY KEY auto_increment,
    nome VARCHAR(128),
    email VARCHAR(128)
);