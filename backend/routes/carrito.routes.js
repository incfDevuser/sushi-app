import express from 'express'
import { AuthMiddleware } from '../middlewares/AuthMiddleware.js';
import { CarritoController } from '../controllers/carritoController.js'

const router = express.Router();

//Ruta para obtener el carrito del usuario autenticado
router.get("/", AuthMiddleware.authToken, CarritoController.obtenerCarrito);

//Ruta para agregar un producto al carrito del usuario autenticado
router.post("/agregar", AuthMiddleware.authToken, CarritoController.agregarProductoAlCarrito);

//Ruta para eliminar un producto del carrito del usuario autenticado
router.delete("/:carritoId/producto/:productoId", AuthMiddleware.authToken, CarritoController.eliminarProductoDelCarrito);

//Ruta para vaciar el carrito del usuario autenticado
router.post("/vaciar", AuthMiddleware.authToken, CarritoController.vaciarCarrito);

export default router;