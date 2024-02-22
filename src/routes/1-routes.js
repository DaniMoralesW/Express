const express = require('express')
const router = express.Router()

const listarUsuarios = require("../controllers/user.getAll.js");
const actualizarUsuario = require('../controllers/user.Update.js');
const crearUsuario = require("../controllers/user.createUser.js");
const usuarioEliminar = require("../controllers/user.eliminar.js");


router.get("/:id", listarUsuarios);

router.post("/crear-usuario", crearUsuario);

router.post("/login", (req, res) => {
    res.send("Ruta POST gestionada")
});


router.put("/actualizar-usuario/:id", actualizarUsuario);

router.delete("/eliminar-usuario", usuarioEliminar); //Tengo un problema, me dice que no encuentra esta ruta

module.exports = router;
