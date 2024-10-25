import React from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-28 bg-cover bg-center">
      {/* Mensaje de Bienvenida */}
      <div className="bg-white bg-opacity-80 p-5 rounded-lg text-center">
        <h1 className="text-3xl font-semibold text-gray-700 mb-2">
          ¡Bienvenido a Sushi App!
        </h1>
        <p className="text-gray-500">
          Regístrate para hacer tus pedidos favoritos 🍣
        </p>
      </div>

      {/* Formulario de Registro */}
      <form className="mt-10 w-full max-w-xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">

        {/* Sección Nombre y Dirección */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="w-full mb-4">
            <label
              htmlFor="nombre_completo"
              className="block text-gray-700 font-medium text-lg"
            >
              Nombre Completo
            </label>
            <input
              type="text"
              id="nombre_completo"
              placeholder="Usuario Prueba"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="w-full mb-4">
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium text-lg"
            >
              Dirección
            </label>
            <input
              type="text"
              id="direccion"
              placeholder="Antonio Varas 881"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Seccion Comuna y Ciudad */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="w-full mb-4">
            <label htmlFor="comuna" className="block text-gray-700 font-medium">
              Comuna
            </label>
            <input
              type="text"
              id="comuna"
              placeholder="Providencia"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="w-full mb-4">
            <label htmlFor="ciudad" className="block text-gray-700 font-medium">
              Ciudad
            </label>
            <input
              type="text"
              id="ciudad"
              placeholder="Santiago"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Seccion Region y Fecha de nacimiento */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="w-full mb-4">
            <label htmlFor="region" className="block text-gray-700 font-medium">
              Región
            </label>
            <input
              type="text"
              id="region"
              placeholder="Metropolitana"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          <div className="w-full mb-4">
            <label
              htmlFor="fecha_nacimiento"
              className="block text-gray-700 font-medium"
            >
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="fecha_nacimiento"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Seccion Sexo y Telefono */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div className="w-full mb-4">
            <label htmlFor="sexo" className="block text-gray-700 font-medium">
              Sexo
            </label>
            <select
              id="sexo"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
          </div>

          <div className="w-full mb-4">
            <label
              htmlFor="telefono"
              className="block text-gray-700 font-medium"
            >
              Teléfono
            </label>
            <input
              type="tel"
              id="telefono"
              placeholder="987654321"
              className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>
        </div>

        {/* Seccion de Correo y Contrasena */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            placeholder="prueba@gmail.com"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div className="w-full mb-4">
          <label
            htmlFor="contraseña"
            className="block text-gray-700 font-medium"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="contraseña"
            placeholder="********"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
        >
          Registrarme
        </button>

        <p className="mt-4 text-center text-gray-600">
          ¿Ya tienes cuenta?{" "}
          <Link
            to="/iniciarSesion"
            className="text-red-500 hover:text-red-600 font-medium"
          >
            Inicia Sesión aquí
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
