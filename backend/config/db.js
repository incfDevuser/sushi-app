import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const conexion = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URI);
    console.log("Conexion BBDD Exitosa");
  } catch (error) {
    console.error(error);
    throw new Error("Hubo un error con la conexion a la Base de Datos");
  }
};
export default conexion;
