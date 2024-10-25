import express from "express";
import { PedidoController } from "../controllers/pedidoController.js";
import { AuthMiddleware } from "../middlewares/AuthMiddleware.js";
const router = express.Router();

//Ruta para obtener los pedidos
router.get("/", AuthMiddleware.authToken, PedidoController.obtenerPedidos);

//Ruta para obtener un pedido
router.get("/pedido/:id", AuthMiddleware.authToken, PedidoController.obtenerPedido);

//Ruta para crear un pedido, este es lo que usuario creara con el boton de ordenar o crear podido
router.post(
  "/crearPedido",
  AuthMiddleware.authToken,
  PedidoController.crearPedido
);

//Ruta obtener pedidos por usuario
router.get(
  "/misPedidos",
  AuthMiddleware.authToken,
  PedidoController.obtenerPedidosUsuario
);

//Ruta para eliminar pedido
router.delete(
  "/:id",
  AuthMiddleware.authToken,
  PedidoController.eliminarPedido
);

//Ruta para cancelar el pedido
router.put(
  "/cancelarPedido/:id",
  AuthMiddleware.authToken,
  PedidoController.cancelarPedido
);

export default router;
