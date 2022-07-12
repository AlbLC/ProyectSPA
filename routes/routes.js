const router = require("express").Router();
const usuarios = require('../controllers/usuarios');
const { registro, login } = usuarios;


router.post("/busqueda")
router.post("/registro", registro)
router.post("/login", login)




 
module.exports = router;