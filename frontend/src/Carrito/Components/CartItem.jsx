import React from "react";
const CartItem = ({
  nombre,
  descripcion,
  precio,
  cantidad,
  imagenUrl,
  onDelete,
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
      <img
        className="w-20 h-20 object-cover rounded-md border border-gray-300 shadow-sm"
        src={imagenCompletaUrl}
        alt={nombre}
      />
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{nombre}</h3>
        <p className="text-sm text-gray-500 mb-2 truncate">{descripcion}</p>
        <div className="flex gap-4 items-center">
          <p className="bg-blue-500 text-white text-center font-semibold w-[25px] h-[25px] rounded-full">{cantidad}</p>
          <p className="font-semibold text-green-600">{precioTotal}</p>
        </div>
      </div>
      <button
        onClick={onDelete}
        className="ml-4 text-red-500 hover:text-red-700 font-semibold transition"
      >
        Eliminar
      </button>
    </div>
  );
};
export default CartItem;
