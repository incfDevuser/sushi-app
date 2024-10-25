//Principales
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import conexion from "./config/db.js";

//Rutas
import usuariosRoutes from "./routes/usuarios.routes.js";
import productosRoutes from "./routes/producto.routes.js";
import carritoRoutes from './routes/carrito.routes.js'
import pedidosRoutes from './routes/pedido.routes.js'

dotenv.config();
conexion();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

//Rutas
app.use("/api/usuarios", usuariosRoutes);
app.use("/api/productos", productosRoutes);
app.use("/api/carrito", carritoRoutes)
app.use("/api/pedidos", pedidosRoutes)

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
