const User = require("../models/user.model.js");

const crearUsuario = async (req, res) => {
    const {titulo, completado} = req.body;

    try{
        await User.create({
        titulo: titulo,
        completado: completado,
        });
        
        res.status(201).json({
        msg:"Usuario creado con éxito",
        code: 201
        })
    }catch (error){
        console.log(error);
    }
};

module.exports = crearUsuario;