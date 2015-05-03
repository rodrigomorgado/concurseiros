-- UP
GRANT ALL PRIVILEGES ON *.* TO 'concurseiro'@'localhost'
    ->     IDENTIFIED BY 'concurseiro' WITH GRANT OPTION;
    
-- DOWN
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'concurseiro'@'localhost'