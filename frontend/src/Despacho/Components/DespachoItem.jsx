import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaDollarSign,
  FaTruck,
} from "react-icons/fa";

const DespachoItem = ({ despacho }) => {
  const [ubicacion, setUbicacion] = useState("Cargando ubicación...");

  const getEstadoColor = (estado) => {
    switch (estado) {
      case "Pendiente":
        return "bg-yellow-400 text-white";
      case "En Camino":
        return "bg-blue-500 text-white";
      case "Entregado":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-300 text-gray-700";
    }
  };

  const obtenerUbicacion = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`
      );
      const data = await response.json();
      if (data && data.display_name) {
        setUbicacion(data.display_name);
      } else {
        setUbicacion("Ubicación no disponible");
      }
    } catch (error) {
      console.error("Error al obtener la ubicación:", error);
      setUbicacion("Error al obtener ubicación");
    }
  };

  useEffect(() => {
    if (despacho.origen_entrega) {
      const [lat, lon] = despacho.origen_entrega
        .split(", ")
        .map((coord) => parseFloat(coord.split(": ")[1]));
      obtenerUbicacion(lat, lon);
    } else {
      setUbicacion("Ubicación de origen no disponible");
    }
  }, [despacho.origen_entrega]);

  return (
    <div className="border rounded-lg shadow-lg bg-white overflow-hidden">
      <div
        className={`p-4 ${getEstadoColor(
          despacho.estado_entrega
        )} font-semibold text-center text-lg`}
      >
        Estado de Entrega: {despacho.estado_entrega}
      </div>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-gray-800">
            Pedido #{despacho.pedido._id}
          </h3>
          <p className="text-sm text-gray-500">
            {new Date(despacho.pedido.fecha_pedido).toLocaleDateString()}
          </p>
        </div>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center">
            <FaUser className="text-blue-500 mr-2" /> Información del Cliente
          </h4>
          <div className="ml-6 text-gray-800">
            <p><strong>Nombre:</strong> {despacho.pedido.cliente.nombre_completo}</p>
            <p><strong>Teléfono:</strong> {despacho.pedido.cliente.telefono}</p>
            <p><strong>Email:</strong> {despacho.pedido.cliente.email}</p>
          </div>
        </section>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> Dirección de Entrega
          </h4>
          <div className="ml-6 text-gray-800">
            <p>{despacho.direccion_entrega}</p>
            <p><strong>Ubicación de Origen:</strong> {ubicacion}</p>
          </div>
        </section>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center">
            <FaDollarSign className="text-green-500 mr-2" /> Detalles del Pedido
          </h4>
          <div className="ml-6 text-gray-800">
            <p><strong>Total:</strong> ${despacho.pedido.total_pedido.toLocaleString()}</p>
            <p><strong>Método de Pago:</strong> {despacho.pedido.medio_pago}</p>
            {despacho.pedido.descuento > 0 && (
              <p><strong>Descuento:</strong> ${despacho.pedido.descuento.toLocaleString()}</p>
            )}
          </div>
        </section>

        <section className="space-y-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center">
            <FaTruck className="text-gray-600 mr-2" /> Encargado del Despacho
          </h4>
          <div className="ml-6 text-gray-800">
            <p><strong>Nombre:</strong> {despacho.encargado_despacho.nombre_completo}</p>
            <p><strong>Contacto:</strong> {despacho.encargado_despacho.email} | {despacho.encargado_despacho.telefono}</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DespachoItem;
