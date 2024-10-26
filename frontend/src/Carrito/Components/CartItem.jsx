// CartItem.jsx
import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = ({
  nombre,
  descripcion,
  precio,
  cantidad,
  imagenUrl,
  onAdd,
  onRemove,
}) => {
  const imagenCompletaUrl = `http://localhost:5000/${imagenUrl}`;
  const formatearPrecio = (precio) =>
    new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }).format(precio);

  const precioTotal = formatearPrecio(precio * cantidad);

  return (
    <div className="flex items-center border border-gray-200 rounded-lg shadow-lg p-4 bg-white transition duration-200 hover:shadow-xl space-x-4">
      {/* Imagen del producto */}
      <img
        className="w-20 h-20 object-cover rounded-md border border-gray-300 shadow-sm"
        src={imagenCompletaUrl}
        alt={nombre}
      />

      {/* Información del producto */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{nombre}</h3>
        <p className="text-sm text-gray-500 mb-2 truncate">{descripcion}</p>

        {/* Precio y cantidad */}
        <div className="flex justify-between items-center">
          <p className="font-semibold text-green-600">{precioTotal}</p>
          <div className="flex items-center space-x-2">
            <button
              onClick={onRemove}
              className={`p-1 rounded-full transition ${
                cantidad > 1
                  ? "bg-gray-300 hover:bg-red-200"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              disabled={cantidad <= 1}
              aria-label="Disminuir cantidad"
            >
              <AiOutlineMinus className="text-black" />
            </button>
            <span className="text-md font-medium text-gray-800">
              {cantidad}
            </span>
            <button
              onClick={onAdd}
              className="p-1 bg-gray-300 rounded-full hover:bg-green-200 transition"
              aria-label="Aumentar cantidad"
            >
              <AiOutlinePlus className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
