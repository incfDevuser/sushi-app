import React from "react";

const ProductItem = ({ producto }) => {
  const { nombre, descripcion, precio, disponible, imagenUrl } = producto;
  const imagenCompletaUrl = `http://localhost:5000/${imagenUrl}`;
  return (
    <div className="p-4 rounded-md">
      {/* Imagen del Producto y Nombre */}
      <div className="flex flex-col justify-center items-start mb-2">
        <img
          src={imagenCompletaUrl}
          alt="Imagen del Producto"
          className="w-40 h-40 rounded-xl object-cover"
        />
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mt-2">{nombre}</h3>
          <p className="text-sm mt-2 text-gray-500">{descripcion}</p>
        </div>
      </div>
      {/* Precio y Descripción del Producto */}
      <div className="text-start">
        <div className="flex justify-between items-center">
          <p className="text-xl font-bold mb-1">${precio}</p>
          <p className="text-green-600 font-bold">
            {disponible ? "Disponible" : "No disponible"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
