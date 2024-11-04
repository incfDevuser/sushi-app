import React from "react";
import {
  AiOutlineCalendar,
  AiOutlineDollarCircle,
  AiOutlineDelete,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { FaRegCreditCard, FaCheckCircle, FaShippingFast } from "react-icons/fa";
import { usePedido } from "../Context/PedidoContext";
import { toast } from "react-toastify";

const PedidoItem = ({ pedido }) => {
  const { eliminarPedido, cancelarPedido, confirmarPedido } = usePedido();
  const fechaPedido = new Date(pedido.fecha_pedido).toLocaleDateString();

  const estadosColores = {
    Pendiente: "bg-yellow-200 text-yellow-800",
    Confirmado: "bg-green-200 text-green-800",
    Anulado: "bg-red-200 text-red-800",
    "En preparación": "bg-blue-200 text-blue-800",
    Entregado: "bg-gray-200 text-gray-800",
  };

  const handleEliminarPedido = async () => {
    try {
      await eliminarPedido(pedido._id);
      toast.success("Pedido eliminado exitosamente");
    } catch (error) {
      console.error("Error al eliminar el pedido:", error);
      toast.error("Hubo un error al intentar eliminar el pedido");
    }
  };

  const handleCancelarPedido = async () => {
    try {
      await cancelarPedido(pedido._id);
      toast.success("Pedido cancelado exitosamente");
    } catch (error) {
      console.error("Error al cancelar el pedido:", error);
      toast.error("Hubo un error al intentar cancelar el pedido");
    }
  };

  const handleConfirmarPedido = async () => {
    try {
      await confirmarPedido(pedido._id);
      toast.success("Pedido confirmado exitosamente");
    } catch (error) {
      console.error("Error al confirmar el pedido:", error);
      toast.error("Hubo un error al intentar confirmar el pedido");
    }
  };

  return (
    <div className="border p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 w-full mb-6">
      {/* Header con el estado y el ID del pedido */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaCheckCircle className="text-green-500" /> Pedido #{pedido._id}
        </h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-semibold ${estadosColores[pedido.estado_pedido]}`}
        >
          {pedido.estado_pedido}
        </span>
      </div>

      {/* Información del pedido */}
      <div className="text-gray-600 space-y-2 mb-4">
        <p className="flex items-center gap-2">
          <AiOutlineCalendar className="text-blue-500" />{" "}
          <strong>Fecha:</strong> {fechaPedido}
        </p>
        <p className="flex items-center gap-2">
          <AiOutlineDollarCircle className="text-green-500" />{" "}
          <strong>Total:</strong> ${pedido.total_pedido.toFixed(2)}
        </p>
        <p className="flex items-center gap-2">
          <FaRegCreditCard className="text-purple-500" />{" "}
          <strong>Método de pago:</strong> {pedido.medio_pago}
        </p>
      </div>

      {/* Información del cliente */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2 mb-2">
          <FaShippingFast /> Información del Cliente
        </h4>
        <p className="text-gray-600">
          <strong>Nombre:</strong> {pedido.cliente.nombre_completo}
        </p>
        <p className="text-gray-600">
          <strong>Dirección:</strong> {pedido.cliente.direccion}
        </p>
        <p className="text-gray-600">
          <strong>Comuna:</strong> {pedido.cliente.comuna}
        </p>
        <p className="text-gray-600">
          <strong>Ciudad:</strong> {pedido.cliente.ciudad}
        </p>
        <p className="text-gray-600">
          <strong>Email:</strong> {pedido.cliente.email}
        </p>
        <p className="text-gray-600">
          <strong>Teléfono:</strong> {pedido.cliente.telefono}
        </p>
      </div>

      {/* Detalles adicionales */}
      <div className="bg-gray-50 p-4 rounded-lg mb-4">
        <h4 className="text-lg font-semibold text-gray-700 flex items-center gap-2">
          <AiOutlineInfoCircle /> Detalles Adicionales
        </h4>
        <p className="text-gray-600">Descuento Aplicado: ${pedido.descuento}</p>
      </div>

      {/* Lista de productos */}
      <div>
        <h4 className="text-lg font-semibold text-gray-700 mb-2">Productos</h4>
        <ul className="space-y-4">
          {pedido.carrito.productos.map((productoItem) => {
            const { producto, cantidad, precio_unitario } = productoItem;
            const imagenCompletaUrl = `http://localhost:5000/${producto.imagenUrl}`;

            return (
              <li
                key={producto._id}
                className="flex items-center bg-gray-50 p-4 rounded-lg shadow-sm gap-4"
              >
                <img
                  src={imagenCompletaUrl}
                  alt={producto.nombre}
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-grow">
                  <p className="text-gray-800 font-semibold text-lg">
                    {producto.nombre}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {producto.descripcion}
                  </p>
                  <p className="text-gray-600 text-sm">Cantidad: {cantidad}</p>
                </div>
                <p className="text-gray-800 font-semibold">
                  ${precio_unitario.toFixed(2)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col md:flex-row justify-end space-y-2 md:space-y-0 md:space-x-4 mt-6">
        <button
          onClick={handleCancelarPedido}
          className="flex items-center bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600 transition-all duration-200"
        >
          <AiOutlineDelete className="mr-2" /> Cancelar Pedido
        </button>
        <button
          onClick={handleEliminarPedido}
          className="flex items-center bg-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-gray-400 transition-all duration-200"
        >
          <AiOutlineDelete className="mr-2" /> Eliminar Pedido
        </button>
        <button
          onClick={handleConfirmarPedido}
          disabled={pedido.estado_pedido === "Confirmado"}
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition-all duration-200 disabled:bg-gray-300"
        >
          <FaRegCreditCard className="mr-2" /> Pagar Pedido
        </button>
      </div>
    </div>
  );
};

export default PedidoItem;
