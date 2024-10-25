import Pedido from "../models/pedidoSchema.js";
import Carrito from "../models/carritoSchema.js";

const obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find({});
    return res.status(200).json({
      message: "Lista de pedidos",
      pedidos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
const obtenerPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findById(id);
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    return res.status(200).json({
      message: "Pedido encontrado",
      pedido,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
const crearPedido = async (req, res) => {
  try {
    const { carritoId, medio_pago, descuento } = req.body;
    if (!req.user || !req.user._id) {
      return res.status(401).json({
        message: "No se ha encontrado la sesión del usuario autenticado",
      });
    }
    const { _id: clienteId } = req.user;
    const carrito = await Carrito.findById(carritoId).populate(
      "productos.producto"
    );
    if (!carrito) {
      return res.status(404).json({
        message: "Carrito no encontrado",
      });
    }
    let total_pedido = 0;
    carrito.productos.forEach((item) => {
      total_pedido += item.cantidad * item.precio_unitario;
    });
    if (descuento) {
      total_pedido -= descuento;
    }
    const nuevoPedido = new Pedido({
      cliente: clienteId,
      carrito: carritoId,
      total_pedido,
      medio_pago,
      cajero_virtual: clienteId,
      descuento,
    });
    await nuevoPedido.save();
    return res.status(201).json({
      message: "Pedido creado con éxito",
      pedido: nuevoPedido,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al crear el pedido",
    });
  }
};
const obtenerPedidosUsuario = async (req, res) => {
  try {
    const { _id: clienteId } = req.user;
    const pedidos = await Pedido.find({ cliente: clienteId }).populate(
      "carrito"
    );
    if (!pedidos.length) {
      return res.status(404).json({
        message: "No se encontraron pedidos para este usuario",
      });
    }
    return res.status(200).json({
      message: "Pedidos encontrados de un Usuario",
      pedidos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al obtener los pedidos del usuario",
    });
  }
};
const eliminarPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedidoEliminado = await Pedido.findByIdAndDelete(id);
    if (!pedidoEliminado) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    return res.status(200).json({
      message: "Pedido eliminado con éxito",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al eliminar el pedido",
    });
  }
};
const cancelarPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findById(id);
    if (!pedido) {
      return res.status(404).json({
        message: "Pedido no encontrado",
      });
    }
    pedido.estado_pedido = "Anulado";
    await pedido.save();
    return res.status(200).json({
      message: "Pedido cancelado con éxito",
      pedido,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al cancelar el pedido",
    });
  }
};
export const PedidoController = {
  obtenerPedidos,
  obtenerPedido,
  crearPedido,
  eliminarPedido,
  cancelarPedido,
  obtenerPedidosUsuario,
};
