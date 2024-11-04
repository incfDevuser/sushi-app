import React, { useState, useEffect } from "react";
import { useDespacho } from "../../Despacho/Context/DespachoContext";
import { toast } from "react-toastify";

const PedidoItem = ({ pedido }) => {
  const fechaPedido = new Date(pedido.fecha_pedido).toLocaleDateString();
  const { generarDespacho } = useDespacho();
  const [mensaje, setMensaje] = useState(null);
  const [origenEntrega, setOrigenEntrega] = useState(
    "Ubicación no especificada"
  );
  const obtenerUbicacionActual = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setOrigenEntrega(`Latitud: ${latitude}, Longitud: ${longitude}`);
        },
        (error) => {
          console.error("Error obteniendo la ubicación:", error);
          setMensaje("No se pudo obtener la ubicación.");
        }
      );
    } else {
      setMensaje("Geolocalización no soportada en este navegador.");
    }
  };
  const handleDespacho = async () => {
    const nuevoDespacho = {
      pedido: pedido._id,
      direccion_entrega: `${pedido.cliente.direccion}, ${pedido.cliente.comuna}, ${pedido.cliente.ciudad}, ${pedido.cliente.region}`,
      fecha_entrega: null,
      origen_entrega: origenEntrega,
    };
    try {
      await generarDespacho(nuevoDespacho);
      toast.success("Despacho Generado Automáticamente");
    } catch (error) {
      toast.error("Error Al Generar el Despacho");
    }
  };
  useEffect(() => {
    obtenerUbicacionActual();
  }, []);
  return (
    <div className="border p-6 rounded-lg shadow-md bg-white mb-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Pedido #{pedido._id}</h3>
        <span
          className={`px-3 py-1 rounded-full text-sm font-bold ${
            pedido.estado_pedido === "Pendiente"
              ? "bg-yellow-200 text-yellow-800"
              : "bg-green-200 text-green-800"
          }`}
        >
          {pedido.estado_pedido}
        </span>
      </div>

      {/* Información del cliente */}
      <div className="text-gray-700 space-y-2 mb-4">
        <p>
          <strong>Cliente:</strong> {pedido.cliente.nombre_completo}
        </p>
        <p>
          <strong>Dirección:</strong> {pedido.cliente.direccion},{" "}
          {pedido.cliente.comuna}, {pedido.cliente.ciudad},{" "}
          {pedido.cliente.region}
        </p>
        <p>
          <strong>Email:</strong> {pedido.cliente.email}
        </p>
        <p>
          <strong>Teléfono:</strong> {pedido.cliente.telefono}
        </p>
      </div>

      {/* Detalles del Pedido */}
      <div className="text-gray-600 space-y-2">
        <p>
          <strong>Fecha del Pedido:</strong> {fechaPedido}
        </p>
        <p>
          <strong>Total:</strong> ${pedido.total_pedido.toFixed(2)}
        </p>
        <p>
          <strong>Método de Pago:</strong> {pedido.medio_pago}
        </p>
        {pedido.descuento > 0 && (
          <p>
            <strong>Descuento Aplicado:</strong> ${pedido.descuento.toFixed(2)}
          </p>
        )}
      </div>

      {/* Generar Despacho */}
      <div className="mt-4">
        <h4 className="text-lg font-semibold text-gray-700 mb-4">
          Generar Despacho
        </h4>
        <div className="flex justify-between items-center">
          <button
            onClick={handleDespacho}
            className="w-[300px] bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Generar Despacho
          </button>
          {mensaje && <p className="text-sm text-gray-600 mt-2">{mensaje}</p>}
        </div>
      </div>
    </div>
  );
};

export default PedidoItem;
