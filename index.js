const express = require("express");
// Creación del servidor
const app = express();

// Definición de ruta principal

app.get("/", (req, res) => {
    res.send("Hola mundo");
})
app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});
