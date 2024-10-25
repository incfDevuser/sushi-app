import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUsuario } from "../Context/UsuarioContext";


const Register = () => {
  const { registrarse } = useUsuario();
  const [nuevoUsuario, setNuevoUsuario] = useState({
    run: "",
    nombre_completo: "",
    direccion: "",
    comuna: "",
    ciudad: "",
    region: "",
    fecha_nacimiento: "",
    sexo: "",
    telefono: "",
    email: "",
    contraseña: "",
  });

  const [mostrarContraseña, setMostrarContraseña] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNuevoUsuario((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleRegistrar = async (e) => {
    e.preventDefault();
    try {
      await registrarse(nuevoUsuario);
      navigate("/perfil")
    } catch (error) {
      console.error("Error al Registrarse", error);
    }
  };

  return (
    <form
      onSubmit={handleRegistrar}
      className="mt-10 w-full max-w-xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg"
    >
      {/* Sección RUN */}
      <div className="w-full mb-4">
        <label
          htmlFor="run"
          className="block text-gray-700 font-medium text-lg"
        >
          RUN
        </label>
        <input
          type="text"
          id="run"
          placeholder="Ingresa Rut con Puntos y Guion"
          className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={nuevoUsuario.run}
          onChange={handleChange}
        />
      </div>

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
            placeholder="Ej: Juanito Perez Gallardo"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.nombre_completo}
            onChange={handleChange}
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
            placeholder="Ej: Calle de Fantasia 123"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.direccion}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Sección Comuna y Ciudad */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="w-full mb-4">
          <label htmlFor="comuna" className="block text-gray-700 font-medium">
            Comuna
          </label>
          <input
            type="text"
            id="comuna"
            placeholder="Ej: Providencia"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.comuna}
            onChange={handleChange}
          />
        </div>

        <div className="w-full mb-4">
          <label htmlFor="ciudad" className="block text-gray-700 font-medium">
            Ciudad
          </label>
          <input
            type="text"
            id="ciudad"
            placeholder="Ej: Santiago"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.ciudad}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Sección Región y Fecha de Nacimiento */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="w-full mb-4">
          <label htmlFor="region" className="block text-gray-700 font-medium">
            Región
          </label>
          <input
            type="text"
            id="region"
            placeholder="Ej: Metropolitana"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.region}
            onChange={handleChange}
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
            value={nuevoUsuario.fecha_nacimiento}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Sección Sexo y Teléfono */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="w-full mb-4">
          <label htmlFor="sexo" className="block text-gray-700 font-medium">
            Sexo
          </label>
          <select
            id="sexo"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.sexo}
            onChange={handleChange}
          >
            <option value="">Selecciona una opción</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
            <option value="Otro">Otro</option>
          </select>
        </div>

        <div className="w-full mb-4">
          <label htmlFor="telefono" className="block text-gray-700 font-medium">
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            placeholder="Ej: 12345678"
            className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            value={nuevoUsuario.telefono}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Sección de Correo y Contraseña */}
      <div className="w-full mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          placeholder="example@gmail.com"
          className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={nuevoUsuario.email}
          onChange={handleChange}
        />
      </div>

      <div className="w-full mb-4">
        <label htmlFor="contraseña" className="block text-gray-700 font-medium">
          Contraseña
        </label>
        <input
          type={mostrarContraseña ? "text" : "password"}
          id="contraseña"
          placeholder="Ingresa Contraseña"
          className="mt-1 w-full p-2 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={nuevoUsuario.contraseña}
          onChange={handleChange}
        />
        <div className="mt-2">
          <label className="text-gray-700 font-medium flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              checked={mostrarContraseña}
              onChange={() => setMostrarContraseña(!mostrarContraseña)}
            />
            Mostrar contraseña
          </label>
        </div>
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
  );
};

export default Register;
