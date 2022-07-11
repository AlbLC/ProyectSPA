


const connection = require("../database/sql");
const mysql = require("mysql");
const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");




const user = {
    registro: (req, res) => {
      console.log(req.body);
      let nombre = req.body.nombre;
      let apellido = req.body.apellido;
      let email = req.body.email;
      let contrasena = req.body.contrasena;
      let username = req.body.username;
      const emailExp = new RegExp(/^([\d\w_\.-]+)@([\d\w\.-]+)\.([\w\.]{3})$/);
      const nameExp = new RegExp(/^([A-Za-z]{1,15})$/);
      const unNameExp = new RegExp(/^([A-Za-z]{1,15})$/);
      const passExp = new RegExp(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/
      );
      const usernameExp = new RegExp(/^([A-Za-z]{1,15})$/);




      if (
      

        !emailExp.test(email) ||
        !nameExp.test(nombre) ||
        !unNameExp.test(apellido) ||
        !passExp.test(contrasena) ||
        !usernameExp.test(username)
        
       ) {
        console.log("campos incorrectos"); //renderizar una pagina de campos incorrectos
      } else {
  
  
        bcrypt.hash(contrasena, 10, (err, palabraSecretaEncriptada) => {
          if (err) {
            console.log("Error hasheando:", err);
          } else {
            console.log("Y hasheada es: " + palabraSecretaEncriptada);
            palabraEncriptada = palabraSecretaEncriptada;
            
            
            const usuario = await Usuario.create({
                nombre: nombre,
                apellido: apellido,
                email: email,
                contrasena: palabraSecretaEncriptada,
                username:username
                
              });
  
            
          }
          res.send("Registro completado");
        });
        //  let obj = { dni: req.body.dni }
  
        //   res.render("index", {
        //     dni: [obj]
        //     // usuarioRegistrado: "Usuario registrado correctamente",
        // })
  
  
      }
},

}


module.exports = user;