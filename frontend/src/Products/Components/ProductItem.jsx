import React from "react";
import { FaCartPlus } from "react-icons/fa6";

const ProductItem = ({ producto, onAgregarAlCarrito }) => {
  const { nombre, descripcion, precio, disponible, imagenUrl } = producto;
  const imagenCompletaUrl = `http://localhost:5000/${imagenUrl}`;

  return (
    <div className="p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-xs mx-auto">
      <div className="relative flex flex-col items-center mb-3">
        <img
          src={imagenCompletaUrl}
          alt="Imagen del Producto"
          className="w-36 h-36 md:w-44 md:h-44 rounded-lg object-cover mb-2 transition-transform duration-300 hover:scale-105"
        />
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs md:text-sm rounded-md font-semibold ${
            disponible ? "bg-green-500 text-white" : "bg-gray-400 text-white"
          }`}
        >
          {disponible ? "Disponible" : "No disponible"}
        </span>
      </div>
      <h3 className="text-md md:text-lg font-semibold mb-1 text-gray-800 text-center">{nombre}</h3>
      <p className="text-sm text-gray-600 mb-3 leading-relaxed text-center">
        {descripcion}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-lg md:text-xl font-bold text-gray-900">${precio}</p>
        <button
          onClick={() => onAgregarAlCarrito(producto._id, 1)}
          className="flex items-center px-4 py-2 bg-rojoPersonalizado text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
        >
          <FaCartPlus className="mr-2" /> Agregar
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
