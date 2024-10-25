import React from "react";
import { Link } from "react-router-dom";
import { NavLinks } from "../constants/NavbarData";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-11">
      {/* Nombre del Local */}
      <div className="flex-1 text-2xl font-bold text-rojoPersonalizado hover:text-red-600 transition duration-200">
        <Link to="/">Sushi App</Link>
      </div>
      {/* Links de navegación principales */}
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
      {/* Links de autenticación */}
      <div className="flex-1 flex justify-end space-x-6">
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
      </div>
    </nav>
  );
};

export default Navbar;

