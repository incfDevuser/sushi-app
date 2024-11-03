import React from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserTag } from 'react-icons/fa';

const UsuarioItem = ({ usuario }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6 flex items-start gap-6 hover:shadow-xl transition-shadow duration-300">
      <div className="w-16 h-16 bg-rojoPersonalizado flex items-center justify-center rounded-full text-white text-3xl">
        <FaUser />
      </div>
      <div className="flex-grow">
        <h3 className="text-2xl font-semibold text-gray-800 mb-1">{usuario.nombre_completo}</h3>
        <p className="text-gray-500 text-sm mb-4">Registrado el: {new Date(usuario.fecha_registro).toLocaleDateString()}</p>
        <div className="text-gray-600 space-y-3">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-500" />
            <span className="text-gray-700"><strong>Email:</strong> {usuario.email}</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-green-500" />
            <span className="text-gray-700"><strong>Teléfono:</strong> {usuario.telefono}</span>
          </p>
          <p className="flex items-start gap-2">
            <FaMapMarkerAlt className="text-red-500" />
            <span className="text-gray-700">
              <strong>Dirección:</strong> {usuario.direccion}, {usuario.comuna}, {usuario.ciudad}, {usuario.region}
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaUserTag className="text-purple-500" />
            <span className="text-gray-700"><strong>Rol:</strong> {usuario.rol === "super_admin" ? "admin" : usuario.rol}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default UsuarioItem;
