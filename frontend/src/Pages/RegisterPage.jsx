import React from "react";
import Register from "../Usuarios/Auth/Register";

const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 bg-cover bg-center">
      {/* Mensaje de Bienvenida */}
      <div className="bg-white bg-opacity-80 p-5 rounded-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
          ¡Bienvenido a Fukusuke!
        </h1>
        <p className="text-gray-500">
          Regístrate para hacer tus pedidos favoritos 🍣
        </p>
      </div>
      {/* Formulario de Registro */}
      <Register />
    </div>
  );
};

export default RegisterPage;
