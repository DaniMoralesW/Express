const actualizarUsuario = async (req, res) => {
    const{id} = req.params;
        await //toma el id para buscar en la base de datos a ese usuario

    res.status(200).json({
        code: 200,
        msg: `El id proporcionado es: ${id}`,
        data: []
    })
}

module.exports = actualizarUsuario;