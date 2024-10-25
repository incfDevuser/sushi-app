import express from "express";
import { ProductoController } from "../controllers/productoController.js";
import { AuthMiddleware } from "../middlewares/AuthMiddleware.js";
import upload from "../middlewares/multerConfig.js";

const router = express.Router();

//Ruta para obtener los productos
router.get("/", ProductoController.obtenerProductos);

//Ruta para obtener un producto
router.get(
  "/:id",
  AuthMiddleware.authToken,
  ProductoController.obtenerProducto
);

//Ruta para crear un producto, el super admin puede crear los productos
router.post(
  "/crearProducto",
  AuthMiddleware.authToken,
  AuthMiddleware.isSuperAdmin,
  upload.single("imagen"),
  ProductoController.crearProducto
);

//Ruta para eliminar un producto, el super admin puede eliminar productos
router.delete(
  "/:id",
  AuthMiddleware.authToken,
  AuthMiddleware.isSuperAdmin,
  ProductoController.eliminarProducto
);

export default router;
