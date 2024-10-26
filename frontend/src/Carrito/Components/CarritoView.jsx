import React from "react";
import { useCarrito } from "../Context/CarritoContext";
import CartItem from "./CartItem";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CarritoView = () => {
  const { carrito, clearCart, updateItemQuantity } = useCarrito();

  // Calculate the total cost of all items in the cart
  const totalCost = carrito
    ? carrito.productos.reduce(
        (acc, producto) => acc + producto.precio_unitario * producto.cantidad,
        0
      ).toFixed(2)
    : "0.00";

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-4 bg-white rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 flex items-center gap-2">
         Tu Carrito de Compras
      </h2>

      {carrito && carrito.productos.length > 0 ? (
        <>
          <div className="w-full space-y-4 mb-6">
            {carrito.productos.map((producto) => (
              <CartItem
                key={producto._id}
                nombre={producto.producto.nombre}
                descripcion={producto.producto.descripcion}
                precio={producto.precio_unitario}
                cantidad={producto.cantidad}
                imagenUrl={producto.producto.imagenUrl}
                onAdd={() => updateItemQuantity(producto._id, producto.cantidad + 1)}
                onRemove={() => updateItemQuantity(producto._id, producto.cantidad - 1)}
              />
            ))}
          </div>
          <div className="w-full bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-semibold text-gray-600">Total del Carrito:</p>
              <p className="text-2xl font-bold text-green-600">${totalCost}</p>
            </div>
            <button className="w-full bg-rojoPersonalizado text-white py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition-all duration-300">
              Ordenar Ahora
            </button>
          </div>
        </>
      ) : (
        <p className="text-gray-500 text-lg mt-10">Tu carrito está vacío.</p>
      )}
    </div>
  );
};

export default CarritoView;
