const router = require("express").Router();
const usuarios = require('../controllers/usuarios');
const { registro, login, buscarpruebas, verificacion, verinfo, entregar } = usuarios;



router.post("/busqueda", buscarpruebas)
router.post("/registro", registro)
router.post("/login", login)
router.post("/verificacion",verificacion)
router.post("/verinfo",verinfo)
router.post("/entregar",entregar)


 
module.exports = router;