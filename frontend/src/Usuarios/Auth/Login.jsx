import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsuario } from "../Context/UsuarioContext";

const Login = () => {
  const { iniciarSesion } = useUsuario();
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await iniciarSesion(email, contraseña);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleLogin}
      className="mt-10 w-full max-w-md bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
    >
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          placeholder="ejemplo@correo.com"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 font-medium">
          Contraseña
        </label>
        <input
          type="password"
          id="password"
          placeholder="********"
          className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={contraseña} // Cambiado a "contraseña"
          onChange={(e) => setContraseña(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
      >
        Iniciar Sesión
      </button>
      <p className="mt-4 text-center text-gray-600">
        ¿Nuevo en Sushi App?{" "}
        <Link
          to="/registrarse"
          className="text-red-500 hover:text-red-600 font-medium"
        >
          Regístrate aquí
        </Link>
      </p>
    </form>
  );
};

export default Login;
