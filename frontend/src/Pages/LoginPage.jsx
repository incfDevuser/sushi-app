import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 bg-cover bg-center">
      {/* Mensaje de Bienvenida */}
      <div className="bg-white bg-opacity-80 p-5 rounded-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-2">¡Es un gusto verte de nuevo!</h1>
        <p className="text-gray-500">Ingresa a tu cuenta y descubre las delicias que tenemos para ti 🍣</p>
      </div>
      {/* Formulario de Inicio De Sesion */}
      <form className="mt-10 w-full max-w-md bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="ejemplo@correo.com"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-medium">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
        >
          Iniciar Sesión
        </button>
        <p className="mt-4 text-center text-gray-600">
          ¿Nuevo en Sushi App?{' '}
          <Link to='/registrarse' className="text-red-500 hover:text-red-600 font-medium">
            Regístrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
