const express = require("express");
const conectarDb = require("./config/db");
const cors = require("cors");
// Creación del servidor
const app = express();

// Conexión a la base de datos
conectarDb();
app.use(cors());

// Definición de ruta principal
app.use(express.json());

app.use("/api/productos", require("./routes/producto"));

/* app.get("/", (req, res) => {
    res.send("Hola mundo");
}) */
app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});
