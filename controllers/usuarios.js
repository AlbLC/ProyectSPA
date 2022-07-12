

const Usuario = require('../models/Usuario');
const connection = require("../databases/sql");
const mysql = require("mysql");
const Sequelize = require("sequelize");
const { encrypt, compare } = require('../helpers/handleBcrypt');





const usuarios = {
  
  registro: async (req, res) => {

    try {
      let nombre = req.body.nombre;
      let apellido = req.body.apellido;
      let email = req.body.email;
      let contrasena = req.body.contrasena;
      let username = req.body.username;

      const passwordHash = await encrypt(contrasena);
      //bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada));

      const usuarioComprobacion = await Usuario.findOne({
        where: { email: email },
      });
      //console.log(passwordHash)
      //console.log(usuarioComprobacion)
      if (!usuarioComprobacion) {

        if (
          nombre.match(/^[a-z ,.'-]+$/i) &&
          apellido.match(/^[a-z ,.'-]+$/i) &&
          email.match(
            /^[a-zA-Z0-9_\-\.~]{2,}@[a-zA-Z0-9_\-\.~]{2,}\.[a-zA-Z]{2,4}$/)
          && username.match(/^([A-Za-z]{1,15})$/)) {
            

          const usuario = Usuario.create({
            nombre: nombre,
            apellido: apellido,
            email: email,
            contrasena: passwordHash,
            username: username
          });
            //console.log(passwordHash)
          res.json({
            usuario: username,
          });

          
        } else {
          res.json({
            message: "Datos invalidos",
          });
          //res.send("Datos invalidos");
        }

      } else {
        res.json({
          message: "El usuario existe",
        });
        //res.send("El usuario existe");
      }
    } catch (error) {
      console.error(error);
      res.send("Error");
    }
  },

  login: async (req, res) => {
    try {
      //console.log(req)
      const username = req.body.username
      const passwordLogin = req.body.contrasena

      //const { usuarioLogin, passwordLogin } = req.body;
      const usuario = await Usuario.findOne({
        where: { username: username },
        
      });
      console.log(usuario.username)
      //console.log(usuarioLogin)
      //console.log(passwordLogin)
      if (!usuario) {
      
        //res.send("El usuario no existe");
        res.json({
          message: "El usuario no existe",
        });
      }
      const checkPassword = await compare(passwordLogin, usuario.contrasena);

      if (checkPassword) {
        
        //res.send(`Bienvenido ${usuario.nombre}. Login ok`);
        
        res.json({
          message: true,
          username: usuario.username, 
          //nombre: usuario.nombre,
          //apellido: usuario.apellido,
          //rol: usuario.rol  
      })

        //console.log(usuario)
        // res.json({
        //   message: `Bienvenido ${usuario.nombre}. Login ok`,
        // });

      } else {
        //res.send("Contraseña erronea");
        res.json({
          message: `Contraseña erronea`,
        });
      }
    } catch (error) {
        console.error(error);
        res.send(error);
    }
  },

}


module.exports = usuarios;