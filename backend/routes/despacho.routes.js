import express from "express";
import { DespachoController } from "../controllers/despachoController.js";
import { AuthMiddleware } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

//Ruta para obtener la lista de despachos
router.get(
  "/",
  AuthMiddleware.authToken,
  AuthMiddleware.isDespachadorOrSuperAdmin,
  DespachoController.obtenerDespachos
);
//Ruta para obtener el despacho
router.get(
  "/despacho/:id",
  AuthMiddleware.authToken,
  AuthMiddleware.isDespachadorOrSuperAdmin,
  DespachoController.obtenerDespacho
);
//Ruta para crear despacho
router.post(
  "/crearDespacho",
  AuthMiddleware.authToken,
  AuthMiddleware.isDespachador,
  DespachoController.crearDespacho
);
//Ruta para actualizar despacho
router.put(
  "/despacho/:id",
  AuthMiddleware.authToken,
  AuthMiddleware.isDespachador,
  DespachoController.actualizarDespacho
);
//Ruta para eliminar despacho
router.delete(
  "/despacho/:id",
  AuthMiddleware.authToken,
  AuthMiddleware.isSuperAdmin,
  DespachoController.eliminarDespacho
);

export default router;
