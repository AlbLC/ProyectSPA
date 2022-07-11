const router = require("express").Router();
const usuarios = require('../controllers/usuarios');
const { registro } = usuarios;


router.post("/busqueda")
router.post("/registro", registro)




module.exports = router;