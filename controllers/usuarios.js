

const Usuario = require('../models/Usuario');
const Prueba = require('../models/Prueba');
const connection = require("../databases/sql");
const mysql = require("mysql");
const { Sequelize, Op } = require("sequelize");
const { encrypt, compare } = require('../helpers/handleBcrypt');
const UsuariosPruebas = require('../models/UsuariosPruebas');




const usuarios = {

  registro: async (req, res) => {

    try {
      let nombre = req.body.nombre;
      let apellido = req.body.apellido;
      let email = req.body.email;
      let contrasena = req.body.contrasena;
      let username = req.body.username;

      const passwordHash = await encrypt(contrasena);


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
            username: username,
            empleado: false
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
          empleado: usuario.empleado

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
  verificacion: async (req, res) => {
    try {
      const id_usuario_pruebas = req.body.id_usuario_pruebas
      const tarjeta = req.body.tarjeta

      //este ususario pruebas dice que no está definido.
      const verificacion = await UsuariosPruebas.findOne({
        where: { id_usuario_pruebas: id_usuario_pruebas, tarjeta: tarjeta }

      });

      const prueba = await Prueba.findOne({ where: { id_prueba: verificacion.fk_pruebas } })
      console.log(verificacion.dorsal)
      console.log(prueba)

      res.json({ dorsal: verificacion.dorsal, prueba: prueba })

      //console.log(usuarioLogin)
      //console.log(passwordLogin)
      /*  if (!usuario) {
 
         //res.send("El usuario no existe");
         res.json({
           message: "El usuario no existe",
         });
       }
       const checkPassword = await compare(passwordLogin, usuario.contrasena);
 
       if (checkPassword) {
 
         //res.send(Bienvenido ${usuario.nombre}. Login ok);
 
         res.json({
           message: true,
           username: usuario.username, 
           //nombre: usuario.nombre,
           //apellido: usuario.apellido,
           //rol: usuario.rol
       })
 
         //console.log(usuario)
         // res.json({
         //   message: Bienvenido ${usuario.nombre}. Login ok,
         // });
 
       } else {
         //res.send("Contraseña erronea");
         res.json({
           message: Contraseña erronea,
         });
       } */
    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  buscarpruebas: async (req, res) => {
    try {

      const tipo = req.body.tipoPrueba
      var fechaI = new Date(req.body.fechaInicio);
      var fechaF = new Date(req.body.fechaFin);
      var fechaIn = fechaI.getFullYear() + '-' + (fechaI.getMonth() + 1) + '-' + fechaI.getDate();
      var fechaFi = fechaF.getFullYear() + '-' + (fechaF.getMonth() + 1) + '-' + fechaF.getDate();

      //console.log(fecha)

      const prueba = await Prueba.findAll({
        where: {
          tipo: tipo,
          fechaInicio: { [Sequelize.Op.gt]: fechaIn },
          fechaFin: { [Sequelize.Op.lt]: fechaFi },
        },
        //, fechaInicio: fechaI  `${fecha}` ...tipo: tipo,
      });
      //console.log(prueba) 
      //console.log(typeof prueba[0].dataValues.fechainicio)

      res.json({
        prueba
      });

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },


  verinfo: async (req, res) => {
    try {

      const id_prueba = req.body.id

      //console.log(fecha)

      const prueba = await Prueba.findOne({
        where: {
          id_prueba: id_prueba,

        },
        //, fechaInicio: fechaI  `${fecha}` ...tipo: tipo,
      });
      console.log(prueba)
      //console.log(typeof prueba[0].dataValues.fechainicio)

      // res.json({
      //   prueba
      // });

    } catch (error) {
      console.error(error);
      res.send(error);
    }
  },
  inscribirse: async (req, res) => {
    const usuario = await Usuario.findOne({
      where: { username: req.body.user }
    });

    const yaregistrado = await UsuariosPruebas.findOne({
      where: { fk_usuario: usuario.id_usuario, fk_pruebas: req.body.idprueba}
    });

if(yaregistrado==null){

    const inscripcion = UsuariosPruebas.create({
      fk_usuario: usuario.id_usuario,
      fk_pruebas: req.body.idprueba,
      tarjeta: req.body.tarjeta,
      dorsal: "1"

    });

    res.json(true)
  }else{
    res.json(false)
  }
  },
}


module.exports = usuarios;