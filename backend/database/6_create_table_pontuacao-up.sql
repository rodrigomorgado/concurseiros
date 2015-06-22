-- UP
CREATE TABLE IF NOT EXISTS pontuacao (
    idusuario INT,
    idconcurso INT,
    pontuacao DOUBLE,
    PRIMARY KEY (idusuario, idconcurso),
    FOREIGN KEY (idconcurso)
        REFERENCES concursos(idconcurso),
    FOREIGN KEY (idusuario)
        REFERENCES usuarios(idusuario)
);