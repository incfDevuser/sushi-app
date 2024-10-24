import Producto from "../models/productoSchema.js";

//Ruta para obtener los productos
const obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find({});
    return res.status(200).json({
      message: "Lista de productos",
      productos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Obtener un producto
const obtenerProducto = async (req, res) => {
  const { id } = req.params;
  try {
    //Verificar si el producto existe
    const producto = await Producto.findById({ id });
    if (!producto) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }
    return res.status(200).json({
      message: "Producto encontrado",
      producto,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Crear un producto
const crearProducto = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  if (!req.file) {
    return res.status(400).json({
      message: "Es necesario subir una imagen del producto",
    });
  }
  const imagenUrl = req.file.path;

  if (!nombre || !descripcion || !precio) {
    return res.status(400).json({
      message: "Rellena todos los campos",
    });
  }
  //Instanciar un nuevo producto
  const nuevoProducto = new Producto({
    nombre,
    descripcion,
    precio,
    imagenUrl,
  });
  try {
    await nuevoProducto.save();
    return res.status(201).json({
      message: "Producto creado con éxito",
      nuevoProducto,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Ruta para eliminar un producto
const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const productoEliminado = await Producto.findOneAndDelete(id);
    if (!productoEliminado) {
      return res.status(400).json({
        message: "Error al eliminar el Producto",
      });
    }
    return res.status(200).json({
      message: "Producto Eliminado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
export const ProductoController = {
  obtenerProductos,
  obtenerProducto,
  crearProducto,
  eliminarProducto,
};
