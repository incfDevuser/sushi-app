import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../constants/NavbarData";
import { useUsuario } from "../Usuarios/Context/UsuarioContext";
import { FaRegUser, FaClipboardList, FaTruck, FaBars, FaTimes } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import { VscGraphLine } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";

const Navbar = () => {
  const { rol, autenticado, cerrarSesion } = useUsuario();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 md:p-8 bg-white">
      {/* Nombre del Local */}
      <div className="text-xl md:text-2xl font-bold text-rojoPersonalizado hover:text-red-600 transition duration-200">
        <Link to="/">Fukusuke</Link>
      </div>

      {/* Icono de Menú en Pantallas Pequeñas */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        <FaBars />
      </div>

      {/* Menú de Navegación */}
      <div className={`fixed inset-0 bg-white p-8 flex flex-col items-center space-y-6 transform ${menuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:static md:translate-x-0 md:flex md:flex-row md:space-x-8 md:space-y-0 md:p-0 z-50`}>
        {/* Botón de cierre dentro del menú */}
        <button className="self-end text-3xl mb-4 md:hidden" onClick={toggleMenu}>
          <FaTimes />
        </button>

        {/* Enlaces de Navegación */}
        <ul className="space-y-4 md:flex md:space-y-0 md:space-x-8 text-lg">
          {NavLinks.map((item) => (
            <li key={item.id} onClick={() => setMenuOpen(false)}>
              <Link to={item.path} className="hover:text-rojoPersonalizado transition duration-200">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Botones de Sesión y Enlaces de Usuario */}
        {!autenticado ? (
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
            <Link to="/iniciarSesion" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-lg border-2 font-semibold border-rojoPersonalizado text-rojoPersonalizado hover:bg-rojoPersonalizado hover:text-white transition duration-200">
              Iniciar Sesión
            </Link>
            <Link to="/registrarse" onClick={() => setMenuOpen(false)} className="px-4 py-2 rounded-lg font-semibold bg-rojoPersonalizado text-white hover:bg-red-700 transition duration-200">
              Registrarme
            </Link>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-6 md:space-y-0">
            {rol === "super_admin" ? (
              <>
                <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="text-xl">
                  <VscGraphLine />
                </Link>
                <Link to="/crearProducto" onClick={() => setMenuOpen(false)} className="text-xl">
                  <IoIosAddCircleOutline />
                </Link>
              </>
            ) : rol === "despacho" ? (
              <>
                <Link to="/despachadorView" onClick={() => setMenuOpen(false)} className="text-xl">
                  <FaClipboardList />
                </Link>
                <Link to="/envios" onClick={() => setMenuOpen(false)} className="text-xl">
                  <FaTruck />
                </Link>
              </>
            ) : (
              <>
                <Link to="/carrito" onClick={() => setMenuOpen(false)} className="text-xl">
                  <IoCartOutline />
                </Link>
                <Link to="/pedidos" onClick={() => setMenuOpen(false)} className="text-xl">
                  <FaClipboardList />
                </Link>
              </>
            )}
            <Link to="/perfil" onClick={() => setMenuOpen(false)} className="text-xl">
              <FaRegUser />
            </Link>
            <button onClick={cerrarSesion} className="p-2 bg-rojoPersonalizado text-white font-semibold rounded-lg border-b-4 border-red-700 hover:border-red-950 transition duration-300 ease-in-out transform hover:scale-105">
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

