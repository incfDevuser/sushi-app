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
    <div className="max-w-lg w-full mt-10 mx-auto p-6 bg-gradient-to-r from-[#E4DCCF] to-[#F5EBE0] rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <img
          src={perfilUsuario}
          alt="Foto de perfil"
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto mb-4 object-cover shadow-lg border-4 border-[#F3D1BF]"
        />
        <h1 className="text-2xl sm:text-3xl font-semibold text-[#92201F]">
          {usuario.nombre_completo}
        </h1>
        <p className="text-[#614051] capitalize text-xs sm:text-sm mt-1">
          {usuario.rol === "super_admin" ? "Super Administrador" : usuario.rol}
        </p>
      </div>

      <div className="space-y-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdEmail className="h-5 w-5 sm:h-6 sm:w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium text-sm sm:text-base">Email</h2>
            <p className="text-gray-700 text-xs sm:text-sm">{usuario.email}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdPhone className="h-5 w-5 sm:h-6 sm:w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium text-sm sm:text-base">Teléfono</h2>
            <p className="text-gray-700 text-xs sm:text-sm">{usuario.telefono}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdLocationOn className="h-5 w-5 sm:h-6 sm:w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium text-sm sm:text-base">Dirección</h2>
            <p className="text-gray-700 text-xs sm:text-sm">
              {usuario.direccion}, {usuario.comuna}, {usuario.ciudad}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdPerson className="h-5 w-5 sm:h-6 sm:w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium text-sm sm:text-base">RUN</h2>
            <p className="text-gray-700 text-xs sm:text-sm">{usuario.run}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdCalendarToday className="h-5 w-5 sm:h-6 sm:w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium text-sm sm:text-base">Fecha de Nacimiento</h2>
            <p className="text-gray-700 text-xs sm:text-sm">
              {new Date(usuario.fecha_nacimiento).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center space-x-0 sm:space-x-4 border-b pb-3 border-[#F3D1BF]">
          <MdBadge className="h-5 w-5 sm:h-6 sm:w-6 text-[#92201F]" />
          <div>
            <h2 className="text-[#614051] font-medium text-sm sm:text-base">Fecha de Registro</h2>
            <p className="text-gray-700 text-xs sm:text-sm">
              {new Date(usuario.fecha_registro).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerfilPage;
;
