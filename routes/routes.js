const router = require("express").Router();
const usuarios = require('../controllers/usuarios');
const { registro, login, buscarpruebas } = usuarios;


router.post("/busqueda", buscarpruebas)
router.post("/registro", registro)
router.post("/login", login)




 
module.exports = router;