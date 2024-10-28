import mongoose from "mongoose";

const PedidoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  carrito: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Carrito",
    required: true,
  },
  total_pedido: {
    type: Number,
    required: true,
    min: [0, "El total del pedido no puede ser negativo"],
  },
  fecha_pedido: {
    type: Date,
    default: Date.now,
  },
  estado_pedido: {
    type: String,
    enum: ["Pendiente", "Confirmado", "Anulado", "En preparación", "Entregado"],
    required: true,
    default: "Pendiente",
  },
  historial_estado: [
    {
      estado: {
        type: String,
        enum: [
          "Pendiente",
          "Confirmado",
          "Anulado",
          "En preparación",
          "Entregado",
        ],
      },
      fecha_cambio: { type: Date, default: Date.now },
    },
  ],
  cajero_virtual: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },
  medio_pago: {
    type: String,
    enum: ["Servipag", "Depósito Bancario","Mercado Pago"],
    required: true,
  },
  descuento: {
    type: Number,
    default: 0,
    min: [0, "El descuento no puede ser negativo"],
  },
});

const Pedido = mongoose.model("Pedido", PedidoSchema);
export default Pedido;
