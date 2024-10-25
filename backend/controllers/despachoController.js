import Despacho from "../models/despachoSchema.js";

//Obtener todos los despachos con pedido
const obtenerDespachos = async (req, res) => {
  try {
    const despachos = await Despacho.find().populate(
      "pedido encargado_despacho"
    );
    return res.status(200).json({
      message: "Lista de despachos",
      despachos,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Obtener un despacho por ID
const obtenerDespacho = async (req, res) => {
  const { id } = req.params;
  try {
    const despacho = await Despacho.findById(id).populate(
      "pedido encargado_despacho"
    );
    if (!despacho) {
      return res.status(404).json({
        message: "Despacho no encontrado",
      });
    }
    return res.status(200).json({
      message: "Despacho encontrado",
      despacho,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Crear un despacho
const crearDespacho = async (req, res) => {
  const { pedido, direccion_entrega, fecha_entrega } = req.body;
  try {
    if (!pedido) {
      return res.status(404).json({
        message: "Este pedido no existe",
      });
    }
    if (pedido.estado_pedido === "Anulado") {
      return res.status(400).json({
        message: "Este pedido ha sido anulado, no se puede crear el despacho",
      });
    }
    const encargado_despacho = req.user._id;

    // Crear el nuevo despacho
    const nuevoDespacho = new Despacho({
      pedido,
      encargado_despacho,
      direccion_entrega,
      fecha_entrega,
      estado_entrega: "Pendiente",
    });
    await nuevoDespacho.save();

    return res.status(201).json({
      message: "Despacho creado exitosamente",
      despacho: nuevoDespacho,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Actualizar despacho
const actualizarDespacho = async (req, res) => {
  const { id } = req.params;
  try {
    const despacho = await Despacho.findById(id);
    if (!despacho) {
      return res.status(404).json({
        message: "Despacho no encontrado",
      });
    }
    despacho.estado_entrega = "Entregado";

    despacho.fecha_entrega = Date.now();
    await despacho.save();
    return res.status(200).json({
      message: "Despacho actualizado a Entregado exitosamente",
      despacho,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al actualizar el despacho",
    });
  }
};
//Eliminar un despacho
export const eliminarDespacho = async (req, res) => {
  const { id } = req.params;

  try {
    const despacho = await Despacho.findByIdAndDelete(id);
    if (!despacho) {
      return res.status(404).json({
        message: "Despacho no encontrado",
      });
    }
    return res.status(200).json({
      message: "Despacho eliminado exitosamente",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error al eliminar el despacho",
    });
  }
};
export const DespachoController = {
  obtenerDespachos,
  obtenerDespacho,
  crearDespacho,
  actualizarDespacho,
  eliminarDespacho,
};
