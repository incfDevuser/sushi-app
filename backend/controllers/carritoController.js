import Carrito from "../models/carritoSchema.js";
import Producto from "../models/productoSchema.js";

//Obtener el carrito del usuario
const obtenerCarrito = async (req, res) => {
  const { _id } = req.user;
  try {
    const carrito = await Carrito.findOne({ cliente: _id }).populate(
      "productos.producto"
    );
    if (!carrito) {
      return res.status(404).json({
        message: "Carrito no encontrado",
      });
    }
    return res.status(200).json({
      message: "Carrito encontrado",
      carrito,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al obtener el carrito",
    });
  }
};
//Agregar un producto al carrito
const agregarProductoAlCarrito = async (req, res) => {
  const { productoId, cantidad } = req.body;
  const { _id } = req.user;
  try {
    const producto = await Producto.findById(productoId);
    if (!producto) {
      return res.status(404).json({
        message: "Producto no encontrado",
      });
    }
    let carrito = await Carrito.findOne({ cliente: _id });
    if (!carrito) {
      carrito = new Carrito({
        cliente: _id,
        productos: [],
      });
    }
    const productoEnCarrito = carrito.productos.find((p) =>
      p.producto.equals(productoId)
    );
    if (productoEnCarrito) {
      productoEnCarrito.cantidad += cantidad;
    } else {
      carrito.productos.push({
        producto: productoId,
        cantidad,
        precio_unitario: producto.precio,
      });
    }
    await carrito.save();
    return res.status(200).json({
      message: "Producto agregado al carrito",
      carrito,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al agregar el producto al carrito",
    });
  }
};
//Eliminar un producto del carrito
const eliminarProductoDelCarrito = async (req, res) => {
  const { carritoId, productoId } = req.params;
  try {
    const carrito = await Carrito.findById(carritoId);
    if (!carrito) {
      return res.status(404).json({
        message: "Carrito no encontrado",
      });
    }
    const productoEnCarrito = carrito.productos.find(
      (p) => p.producto && p.producto.equals(productoId)
    );
    if (!productoEnCarrito) {
      return res.status(404).json({
        message: "Producto no encontrado en el carrito",
      });
    }
    carrito.productos = carrito.productos.filter(
      (p) => p.producto && !p.producto.equals(productoId)
    );
    await carrito.save();
    return res.status(200).json({
      message: "Producto eliminado del carrito",
      carrito,
    });
  } catch (error) {
    console.error("Error al eliminar el producto del carrito:", error);
    return res.status(500).json({
      message: "Error al eliminar el producto del carrito",
      error: error.message,
    });
  }
};
//Vacial todo el carrito
const vaciarCarrito = async (req, res) => {
  const { carritoId } = req.body;
  try {
    const carrito = await Carrito.findById(carritoId);
    if (!carrito) {
      return res.status(404).json({
        message: "Carrito no encontrado",
      });
    }
    carrito.productos = [];
    await carrito.save();
    return res.status(200).json({
      message: "Carrito vaciado con éxito",
      carrito,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al vaciar el carrito",
    });
  }
};
export const CarritoController = {
  obtenerCarrito,
  agregarProductoAlCarrito,
  eliminarProductoDelCarrito,
  vaciarCarrito,
};
