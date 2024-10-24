import mongoose from "mongoose";

const ProductoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  precio: { type: Number, required: true },
  disponible: { type: Boolean, default: true },
  imagenUrl:{ type:String}
});
const Producto = mongoose.model("Producto", ProductoSchema);
export default Producto;
