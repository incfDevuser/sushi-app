import React, { useEffect, useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaDollarSign, FaTruck, FaCheck, FaEye } from 'react-icons/fa';

const DespachoItem = ({ despacho }) => {
  const [ubicacion, setUbicacion] = useState('Cargando ubicación...');

  // Función para asignar color de fondo según el estado de entrega
  const getEstadoColor = (estado) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-yellow-400 text-white';
      case 'En Camino':
        return 'bg-blue-500 text-white';
      case 'Entregado':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-300 text-gray-700';
    }
  };
  const obtenerUbicacion = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
      const data = await response.json();
      if (data && data.display_name) {
        setUbicacion(data.display_name);
      } else {
        setUbicacion('Ubicación no disponible');
      }
    } catch (error) {
      console.error("Error al obtener la ubicación:", error);
      setUbicacion('Error al obtener ubicación');
    }
  };
  useEffect(() => {
    const [lat, lon] = despacho.origen_entrega.split(', ').map(coord => parseFloat(coord.split(': ')[1]));
    obtenerUbicacion(lat, lon);
  }, [despacho.origen_entrega]);

  return (
    <div className="border rounded-lg shadow-lg bg-white">
      <div className={`p-3 ${getEstadoColor(despacho.estado_entrega)} font-semibold text-center`}>
        Estado de Entrega: {despacho.estado_entrega}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800">Pedido #{despacho.pedido._id}</h3>
          <p className="text-sm text-gray-500">Fecha: {new Date(despacho.pedido.fecha_pedido).toLocaleDateString()}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
            <FaUser className="text-blue-500 mr-2" /> Información del Cliente
          </h4>
          <p><strong>Nombre:</strong> {despacho.pedido.cliente.nombre_completo}</p>
          <p><strong>Teléfono:</strong> {despacho.pedido.cliente.telefono}</p>
          <p><strong>Email:</strong> {despacho.pedido.cliente.email}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
            <FaMapMarkerAlt className="text-red-500 mr-2" /> Dirección de Entrega
          </h4>
          <p>{despacho.direccion_entrega}</p>
          <p><strong>Ubicación de Origen:</strong> {ubicacion}</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
            <FaDollarSign className="text-green-500 mr-2" /> Detalles del Pedido
          </h4>
          <p><strong>Total:</strong> ${despacho.pedido.total_pedido.toLocaleString()}</p>
          <p><strong>Método de Pago:</strong> {despacho.pedido.medio_pago}</p>
          {despacho.pedido.descuento > 0 && (
            <p><strong>Descuento:</strong> ${despacho.pedido.descuento.toLocaleString()}</p>
          )}
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold text-gray-700 flex items-center mb-2">
            <FaTruck className="text-gray-600 mr-2" /> Encargado del Despacho
          </h4>
          <p><strong>Nombre:</strong> {despacho.encargado_despacho.nombre_completo}</p>
          <p><strong>Contacto:</strong> {despacho.encargado_despacho.email} | {despacho.encargado_despacho.telefono}</p>
        </div>
      </div>
    </div>
  );
};

export default DespachoItem;
