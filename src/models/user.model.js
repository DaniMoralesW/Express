const mongoose = require("mongoose");

//Esquema
const { Schema } = mongoose;

const userSchema = new Schema({
    titulo: String,
    completado: Boolean,
})

//Modelo
const User = mongoose.model("User", userSchema);

module.exports = User;