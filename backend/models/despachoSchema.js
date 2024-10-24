import mongoose from "mongoose";

const DespachoSchema = new mongoose.Schema({
  pedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pedido",
    required: true,
  },
  encargado_despacho: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  direccion_entrega: { 
    type: String, 
    required: true 
  },
  fecha_entrega: { 
    type: Date, 
    default: Date.now
  },
  estado_entrega: {
    type: String,
    enum: ["Pendiente", "En camino", "Entregado"],
    required: true,
    default: "Pendiente",
  },
});

const Despacho = mongoose.model("Despacho", DespachoSchema);
export default Despacho;
