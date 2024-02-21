const app = require("./src/app/app.js")
const dbConnection = require("./src/database/conexion.js")

const port = 3000;

app.listen(port, () => {
  console.log(`Aplicacion corriendo en http://localhost:${port}`)
});

dbConnection();