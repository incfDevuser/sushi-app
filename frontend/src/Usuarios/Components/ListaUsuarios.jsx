import React, { useEffect, useState } from "react";
import UsuarioItem from "./UsuarioItem";
import { useUsuario } from "../Context/UsuarioContext";

const ListaUsuarios = () => {
  const { listaUsuarios, listaDeUsuarios } = useUsuario();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [filteredUsuarios, setFilteredUsuarios] = useState([]);

  useEffect(() => {
    listaDeUsuarios();
  }, []);
  useEffect(() => {
    const filtered = listaUsuarios.filter((usuario) => {
      const matchesName = usuario.nombre_completo
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesRole = selectedRole
        ? usuario.rol.toLowerCase() === selectedRole.toLowerCase()
        : true;
      return matchesName && matchesRole;
    });
    setFilteredUsuarios(filtered);
  }, [searchTerm, selectedRole, listaUsuarios]);
  return (
    <div className="p-6 w-full">
      <div className="flex justify-start items-center gap-4 mb-6">
        <h2 className="text-2xl font-semibold">Lista de Usuarios</h2>
        <div className="flex items-center justify-center bg-blue-200 rounded-full text-blue-600 font-bold w-[30px] h-[30px]">
          {filteredUsuarios.length}
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-1/2"
        />
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-1/2"
        >
          <option value="">Filtrar por rol</option>
          <option value="cliente">Cliente</option>
          <option value="super_admin">Super Admin</option>
          <option value="admin">Admin</option>
          <option value="despacho">Despacho</option>
        </select>
      </div>
      {filteredUsuarios.length > 0 ? (
        filteredUsuarios.map((usuario) => (
          <UsuarioItem key={usuario._id} usuario={usuario} />
        ))
      ) : (
        <p>No hay usuarios disponibles.</p>
      )}
    </div>
  );
};

export default ListaUsuarios;

