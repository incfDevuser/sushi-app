import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../constants/NavbarData";
import { useUsuario } from "../Usuarios/Context/UsuarioContext";
// Iconos
import { FaRegUser } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaClipboardList } from "react-icons/fa";
import { VscGraphLine } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";

const Navbar = () => {
  const { rol, autenticado, cerrarSesion } = useUsuario();

  return (
    <nav className="flex justify-between items-center p-11">
      {/* Nombre del Local */}
      <div className="flex-1 text-2xl font-bold text-rojoPersonalizado hover:text-red-600 transition duration-200">
        <Link to="/">Fukusuke</Link>
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-8 text-lg">
          {NavLinks.map((item) => (
            <li key={item.id}>
              <Link
                to={item.path}
                className="hover:text-rojoPersonalizado transition duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex items-center justify-end space-x-6">
        {!autenticado && (
          <>
            <Link
              to="/iniciarSesion"
              className="px-4 py-2 rounded-lg border-2 font-semibold border-rojoPersonalizado text-rojoPersonalizado hover:bg-rojoPersonalizado hover:text-white transition duration-200"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/registrarse"
              className="px-4 py-2 rounded-lg font-semibold bg-rojoPersonalizado text-white hover:bg-red-700 transition duration-200"
            >
              Registrarme
            </Link>
          </>
        )}
        {autenticado && (
          <div className="flex justify-center items-center gap-9">
            {rol === "super_admin" ? (
              <>
                <Link to="/dashboard" className="text-xl">
                  <VscGraphLine />
                </Link>
                <Link to="/crearProducto" className="text-xl">
                  <IoIosAddCircleOutline />
                </Link>
              </>
            ) : rol === "despacho" ? (
              <Link to="/despacho" className="text-xl">
                <FaTruck />
              </Link>
            ) : (
              <>
                <Link to="/carrito" className="text-xl">
                  <IoCartOutline />
                </Link>
                <Link to="/pedidos" className="text-xl">
                  <FaClipboardList />
                </Link>
              </>
            )}
            {/* Link a Mi Perfil */}
            <Link to="/perfil" className="text-xl">
              <FaRegUser />
            </Link>
            <button
              onClick={cerrarSesion}
              className="p-2 bg-rojoPersonalizado text-white font-semibold rounded-xl border-b-4 border-red-700 hover:border-red-950 transition duration-300 ease-in-out transform"
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
