#DROP DATABASE proyectspa;

    CREATE DATABASE proyectspa;
    
    USE proyectspa;
    
    
    #DROP TABLE usuarios;
    CREATE TABLE usuarios(
        id_usuario INT AUTO_INCREMENT,
        nombre VARCHAR(100),
        apellido VARCHAR(200),
        email VARCHAR(100),
        contrasena VARCHAR(100) NOT NULL,
        username VARCHAR (20) NOT NULL,
		PRIMARY KEY(id_usuario)
	
    ); 
    
    
    CREATE TABLE pruebas(
        id_prueba INT AUTO_INCREMENT,
        fechainicio DATE,
        fechafin DATE,
        nombreprueba VARCHAR(200),
        precio INT,
        tipo VARCHAR(30),
        descripcion VARCHAR (1000),
		PRIMARY KEY(id_prueba)
    );
    
    CREATE TABLE usuario_pruebas(
        id_usuario_pruebas INT AUTO_INCREMENT, #tambien se utiliza como codigo de inscripcion
        fk_usuario INT,
		fk_pruebas INT,
        tarjeta INT(16),
        dorsal INT(100) AUTO_INCREMENT,
		PRIMARY KEY(id_usuario_pruebas),
        FOREIGN KEY (fk_usuario) REFERENCES usuarios(id_usuario),
		FOREIGN KEY (fk_pruebas) REFERENCES pruebas(id_prueba)
    ); 