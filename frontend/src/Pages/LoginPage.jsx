import React from 'react';
import Login from '../Usuarios/Auth/Login';
const LoginPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 bg-cover bg-center">
      {/* Mensaje de Bienvenida */}
      <div className="bg-white bg-opacity-80 p-5 rounded-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-2">¡Es un gusto verte de nuevo!</h1>
        <p className="text-gray-500">Ingresa a tu cuenta y descubre las delicias que tenemos para ti 🍣</p>
      </div>
      {/* Formulario de Inicio De Sesion */}
      <Login/>
    </div>
  );
};

export default LoginPage;
