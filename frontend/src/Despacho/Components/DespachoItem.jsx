import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaMapMarkerAlt,
  FaDollarSign,
  FaTruck,
  FaCheckCircle,
} from "react-icons/fa";
import { useDespacho } from "../Context/DespachoContext";
import { toast } from 'react-toastify'

const DespachoItem = ({ despacho }) => {
  const [ubicacion, setUbicacion] = useState("Cargando ubicación...");
  const { finalizarDespacho } = useDespacho();

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
  const handleFinalizar = async () => {
    try {
      await finalizarDespacho(despacho._id);
      toast.success(`El despacho ha sido finalizado.`);
    } catch (error) {
      toast.error("Error al finalizar el despacho. Intenta nuevamente.");
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
        className={`p-4 ${getEstadoColor(despacho.estado_entrega)} font-semibold text-center text-lg`}
      >
        Estado: {despacho.estado_entrega}
      </div>
      <div className="p-4 space-y-4">
        <h3 className="text-lg font-bold text-gray-800">
          Pedido #{despacho.pedido?._id || "Desconocido"}
        </h3>
        <section className="space-y-2">
          <h4 className="text-md font-semibold text-gray-700 flex items-center">
            <FaUser className="text-blue-500 mr-2" /> Cliente
          </h4>
          <p>
            <strong>Nombre:</strong>{" "}
            {despacho.pedido?.cliente?.nombre_completo || "Nombre no disponible"}
          </p>
        </section>
        <section className="space-y-2">
          <h4 className="text-md font-semibold text-gray-700 flex items-center">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> Entrega
          </h4>
          <p>{despacho.direccion_entrega || "Dirección no disponible"}</p>
          <p className="w-[300px]">
            <strong>Ubicación de Origen:</strong> {ubicacion}
          </p>
        </section>
        <section className="space-y-2">
          <h4 className="text-md font-semibold text-gray-700 flex items-center">
            <FaDollarSign className="text-green-500 mr-2" /> Detalles
          </h4>
          <p>
            <strong>Total:</strong> $
            {despacho.pedido?.total_pedido?.toLocaleString() || "Total no disponible"}
          </p>
          <p>
            <strong>Método de Pago:</strong> {despacho.pedido?.medio_pago || "Método no disponible"}
          </p>
        </section>
        <section className="space-y-2">
          <h4 className="text-md font-semibold text-gray-700 flex items-center">
            <FaTruck className="text-gray-600 mr-2" /> Encargado
          </h4>
          <p>
            <strong>Nombre:</strong>{" "}
            {despacho.encargado_despacho?.nombre_completo || "Encargado no disponible"}
          </p>
          <p>
            <strong>Contacto:</strong> {despacho.encargado_despacho?.email || "Email no disponible"} | {despacho.encargado_despacho?.telefono || "Teléfono no disponible"}
          </p>
        </section>
        {despacho.estado_entrega !== "Entregado" && (
          <button
            onClick={handleFinalizar}
            className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600"
          >
            <FaCheckCircle className="inline mr-2" /> Finalizar Despacho
          </button>
        )}
      </div>
    </div>
  );
};

export default DespachoItem;
