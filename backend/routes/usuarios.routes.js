import express from "express";
import { UsuarioController } from "../controllers/usuarioController.js";
import { AuthMiddleware } from "../middlewares/AuthMiddleware.js";

const router = express.Router();

//Ruta para obtener todos los clientes, verificar si solo se necesitan superadmin
router.get("/", AuthMiddleware.authToken, AuthMiddleware.isSuperAdmin, UsuarioController.obtenerUsuarios);

//Ruta para registrarse, cualquiera puede
router.post("/registrarse", UsuarioController.registrarse);

//Ruta para Iniciar Sesion, cualquiera puede
router.post("/iniciarSesion", UsuarioController.iniciarSesion);

//Ruta para eliminar usuario, solo super admin
router.delete(
  "/usuario/:id",
  AuthMiddleware.authToken,
  AuthMiddleware.isSuperAdmin,
  UsuarioController.eliminarUsuarioId
);

//Ruta para cerrar sesion, se requiere un token y cualquiera puede
router.post(
  "/cerrarSesion",
  AuthMiddleware.authToken,
  UsuarioController.cerrarSesion
);

//Ruta para obtener la sesion de usuario, se necesita un token y cualquiera puede
router.get(
  "/perfil",
  AuthMiddleware.authToken,
  UsuarioController.perfilUsuario
);

export default router;
