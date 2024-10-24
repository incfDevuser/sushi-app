import mongoose from "mongoose";

const CarritoSchema = new mongoose.Schema({
  cliente: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cliente",
    required: true,
  },
  productos: [
    {
      producto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Producto",
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
        min: [1, "La cantidad no puede ser menor a 1"],
      },
      precio_unitario: {
        type: Number,
        required: true,
        min: [0, "El precio unitario no puede ser negativo"],
      },
    },
  ],
});

const Carrito = mongoose.model("Carrito", CarritoSchema);
export default Carrito;
