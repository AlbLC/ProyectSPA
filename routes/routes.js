const router = require("express").Router();
const usuarios = require('../controllers/usuarios');
const { registro, login, verificacion } = usuarios;


router.post("/busqueda")
router.post("/registro", registro)
router.post("/login", login)
router.post("/verificacion",verificacion)



 
module.exports = router;