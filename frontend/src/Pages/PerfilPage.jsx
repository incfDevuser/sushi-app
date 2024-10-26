import React from "react";
import { useUsuario } from "../Usuarios/Context/UsuarioContext";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdCalendarToday,
  MdBadge,
  MdPerson,
} from "react-icons/md";
import perfilUsuario from "../assets/img/PerfilUsuarioImage.png";

const PerfilPage = () => {
  const { usuario } = useUsuario();

  return (
    <div className="max-w-lg mt-10 mx-auto p-6 bg-gradient-to-r from-[#E4DCCF] to-[#F5EBE0] rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <img
          src={perfilUsuario}
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-[#F3D1BF]"
        />
        <h1 className="text-3xl font-semibold text-[#92201F]">
          {usuario.nombre_completo}
        </h1>
        <p className="text-[#614051] capitalize text-sm mt-1">
          {usuario.rol === "super_admin" ? "Super Administrador" : usuario.rol}
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex items-center space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdEmail className="h-6 w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium">Email</h2>
            <p className="text-gray-700">{usuario.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdPhone className="h-6 w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium">Teléfono</h2>
            <p className="text-gray-700">{usuario.telefono}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdLocationOn className="h-6 w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium">Dirección</h2>
            <p className="text-gray-700">
              {usuario.direccion}, {usuario.comuna}, {usuario.ciudad}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdPerson className="h-6 w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium">RUN</h2>
            <p className="text-gray-700">{usuario.run}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdCalendarToday className="h-6 w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium">Fecha de Nacimiento</h2>
            <p className="text-gray-700">
              {new Date(usuario.fecha_nacimiento).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdBadge className="h-6 w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium">Fecha de Registro</h2>
            <p className="text-gray-700">
              {new Date(usuario.fecha_registro).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
