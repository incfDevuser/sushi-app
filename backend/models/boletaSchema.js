import mongoose from "mongoose";

const BoletaSchema = new mongoose.Schema({
  pedido: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Pedido",
    required: true,
  },
  monto_total: { type: Number, required: true },
  fecha_emision: { type: Date, default: Date.now },
  email_cliente: { type: String, required: true },
});
const Boleta = mongoose.model("Boleta", BoletaSchema);
export default Boleta;
