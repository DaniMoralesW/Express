const User = require("../models/user.model.js");

const usuarioEliminar = async (req, res) => {
    const id = req.params.id; 
    try {
        const usuarioEliminar = await User.findByIdAndDelete(id); 
        if (!usuarioEliminar) {
            return res.status(404).send("Usuario no encontrado"); 
        }
        res.send("Usuario eliminado correctamente");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error interno del servidor al eliminar el usuario");
    }
};

module.exports = usuarioEliminar;
