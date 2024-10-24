import Pedido from "../models/pedidoSchema.js";
import Carrito from "../models/carritoSchema.js";

//Obtener todos los pedidos
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
//Obtener pedido
const obtenerPedido = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findById({ id });
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
//Crear el pedido con el carrito
const crearPedido = async (req, res) => {
  const { carritoId, medio_pago, descuento } = req.body;
  const { clienteId } = req.params;

  try {
    //Buscar el carrito en la base de datos
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

export const PedidoController = {
  obtenerPedidos,
  obtenerPedido,
  crearPedido,
};
