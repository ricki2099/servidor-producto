const express = require("express");
const conectarDb = require("./config/db");
// Creación del servidor
const app = express();

// Conexión a la base de datos
conectarDb();

// Definición de ruta principal

app.get("/", (req, res) => {
    res.send("Hola mundo");
})
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
