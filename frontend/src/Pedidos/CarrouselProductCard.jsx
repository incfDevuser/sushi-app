import React from "react";
const CarrouselProductCard = ({
  nombre,
  descripcion,
  precio,
  imagenUrl,
}) => {
  return (
    <div className="flex flex-col items-center mt-8">
      <div className="flex gap-5 bg-white rounded-xl p-6 shadow-lg transform transition duration-300 hover:scale-105">
        <div className="flex flex-col gap-4 p-4">
          <h3 className="text-2xl font-bold text-red-600">🍣 Más Vendidos</h3>
          <h2 className="text-2xl font-semibold text-gray-800">{nombre}</h2>
          <p className="text-gray-600 text-md italic">{descripcion}</p>
          <div className="flex items-center mt-4">
            <span className="text-3xl font-extrabold text-green-600">
              ${precio}
            </span>
            <span className="ml-2 text-sm text-gray-500">por unidad</span>
          </div>
        </div>
        <div>
          <img
            className="object-cover w-64 h-64 rounded-lg shadow-md"
            src={`http://localhost:5000/${imagenUrl}`}
            alt={nombre}
          />
        </div>
      </div>
    </div>
  );
};
export default CarrouselProductCard;
