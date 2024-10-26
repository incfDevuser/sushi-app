import React from "react";
import { FaCartPlus } from "react-icons/fa6";

const ProductItem = ({ producto }) => {
  const { nombre, descripcion, precio, disponible, imagenUrl } = producto;
  const imagenCompletaUrl = `http://localhost:5000/${imagenUrl}`;

  return (
    <div className="p-5 rounded-lg w-[260px] shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Imagen del Producto */}
      <div className="relative flex flex-col items-center mb-3">
        <img
          src={imagenCompletaUrl}
          alt="Imagen del Producto"
          className="w-44 h-44 rounded-lg object-cover mb-2 transition-transform duration-300 hover:scale-105"
        />
        {/* Disponibilidad */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-sm rounded-md font-semibold ${
            disponible ? "bg-green-500 text-white" : "bg-gray-400 text-white"
          }`}
        >
          {disponible ? "Disponible" : "No disponible"}
        </span>
      </div>
      {/* Nombre y Descripción */}
      <h3 className="text-lg font-semibold mb-1 text-gray-800">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        {descripcion}
      </p>
      {/* Precio */}
      <div className="flex justify-between items-center">
        <p className="text-xl font-bold text-gray-900">${precio}</p>
        <button className="px-4 py-1 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors duration-200">
          <FaCartPlus className="text-xl"/>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
