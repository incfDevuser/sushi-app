import React, { useState } from "react";
import { useProduct } from "../Context/ProductContext";
import { useNavigate } from "react-router-dom";

const CrearProducto = () => {
  const { crearProducto } = useProduct();
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: "",
    descripcion: "",
    precio: "",
    disponible: true,
    imagen: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setNuevoProducto((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await crearProducto(nuevoProducto);
    navigate("/menu");
    setNuevoProducto({
      nombre: "",
      descripcion: "",
      precio: "",
      disponible: true,
      imagen: null,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 shadow-lg rounded-lg"
    >
      <label className="block mb-2 text-gray-700 font-semibold">Nombre</label>
      <input
        type="text"
        name="nombre"
        value={nuevoProducto.nombre}
        onChange={handleChange}
        placeholder="Nombre del producto"
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <label className="block mb-2 text-gray-700 font-semibold">
        Descripción
      </label>
      <textarea
        name="descripcion"
        value={nuevoProducto.descripcion}
        onChange={handleChange}
        placeholder="Descripción del producto"
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <label className="block mb-2 text-gray-700 font-semibold">Precio</label>
      <input
        type="number"
        name="precio"
        value={nuevoProducto.precio}
        onChange={handleChange}
        placeholder="Precio del producto"
        className="w-full mb-4 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      <label className="flex items-center text-gray-700 font-semibold mb-4">
        <input
          type="checkbox"
          name="disponible"
          checked={nuevoProducto.disponible}
          onChange={handleChange}
          className="mr-2"
        />
        Disponible
      </label>

      <label className="block mb-2 text-gray-700 font-semibold">Imagen</label>
      <input
        type="file"
        name="imagen"
        accept="image/*"
        onChange={handleChange}
        className="w-full mb-4"
      />

      <button
        type="submit"
        className="w-full py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600 transition duration-200"
      >
        Crear Producto
      </button>
    </form>
  );
};

export default CrearProducto;
