const Producto = require("../models/Producto");

const getProducts = async (req, res) => {
  try {
    const products = await Producto.find();
    res.json(products);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const productById = await Producto.findById(req.params.id);

    if (!productById) {
      return res.status(404).json({ msg: "No existe el producto" });
    }
    res.json(productById);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

const createProduct = async (req, res) => {
  try {
    let newProducto = new Producto(req.body);
    await newProducto.save();
    res.json(newProducto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { nombre, categoria, ubicacion, precio } = req.body;
    let productById = await Producto.findById(req.params.id);

    if (!productById) {
      return res.status(404).json({ msg: "No existe el producto" });
    }
    productById.nombre = nombre;
    productById.categoria = categoria;
    productById.ubicacion = ubicacion;
    productById.precio = precio;

    producto = await Producto.findOneAndUpdate(
      { _id: req.params.id },
      productById,
      {
        new: true,
      }
    );
    res.json(producto);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    let productById = await Producto.findById(id);
    if (!productById) {
      return res.status(404).json({ msg: "No existe el producto" });
    }
    const product = await Producto.findOneAndRemove({ _id: id });
    res.json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Hubo un error" });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
