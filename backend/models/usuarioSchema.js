import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema({
  run: { type: String, unique: true, required: true },
  nombre_completo: { type: String, required: true },
  direccion: { type: String, required: true },
  comuna: { type: String, required: true },
  ciudad: { type: String, required: true },
  region: { type: String, required: true },
  fecha_nacimiento: { type: Date },
  sexo: {
    type: String,
    enum: ["Masculino", "Femenino", "Otro"],
  },
  email: { type: String, unique: true, required: true },
  contraseña: {
    type: String,
    required: true,
  },
  telefono: { type: String, required: true },
  rol:{
    type:String,
    enum:["cliente", "cajero", "despacho", "super_admin"],
    default:"cliente"
  },
  fecha_registro: { type: Date, default: Date.now },
});
const Usuario = mongoose.model("Usuario", UsuarioSchema);
export default Usuario;
