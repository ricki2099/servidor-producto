//Rutas para cada uno de los productos
const express = require("express");
const router = express.Router();

//Importar el controlador
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  
} = require("../controllers/productoController");

//Definir las rutas para los productos
router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
