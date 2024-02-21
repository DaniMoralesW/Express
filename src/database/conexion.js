const mongoose  = require('mongoose');

const dbConnection = async () => {

try{
    await mongoose.connect("mongodb://Localhost:27017/Express");
    console.log("Base de datos conectada");
} catch (error){
    console.log(error);
}
}

module.exports = dbConnection;