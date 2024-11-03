import React, { useState } from "react";
import { useCarrito } from "../Context/CarritoContext";
import { usePedido } from "../../Pedidos/Context/PedidoContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const CarritoView = () => {
  const { carrito, eliminarProductoDelCarrito, vaciarCarrito } = useCarrito();
  const { crearPedido } = usePedido();
  const [medioPago, setMedioPago] = useState("Servipag");
  const navigate = useNavigate();

  const totalCost = carrito
    ? carrito.productos
        .reduce(
          (acc, producto) => acc + producto.precio_unitario * producto.cantidad,
          0
        )
        .toFixed(2)
    : "0.00";

  const handleVaciar = async (carritoId) => {
    try {
      await vaciarCarrito(carritoId);
      toast.success("Carrito Vaciado");
    } catch (error) {
      console.error(error);
      toast.error("Error al vaciar el carrito");
    }
  };

  const handleOrdenarAhora = async () => {
    if (!carrito || carrito.productos.length === 0) {
      toast.error("Tu carrito está vacío.");
      return;
    }

    try {
      const nuevoPedido = {
        carritoId: carrito._id,
        medio_pago: medioPago,
        descuento: 0,
      };
      const response = await crearPedido(nuevoPedido);
      // handleVaciar(carrito._id);
      //Rederigir a la pagina de sus ordenes
      navigate("/pedidos");
      toast.success("Orden Creada Correctamente!");
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      toast.error("Error al crear el pedido");
    }
  };

  return (
    <div className="flex flex-col items-center w-full max-w-3xl mx-auto p-4 bg-white rounded-lg">
      <div className="flex gap-11 justify-center items-center mb-6 w-full text-center mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">
          Tu Carrito de Compras
        </h2>
        <button
          onClick={() => handleVaciar(carrito._id)}
          className="text-xl flex items-center gap-2 text-red-500 hover:text-red-700"
        >
          <AiOutlineDelete /> Vaciar Carrito
        </button>
      </div>

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
                onDelete={() =>
                  eliminarProductoDelCarrito(carrito._id, producto.producto._id)
                }
              />
            ))}
          </div>
          <div className="w-full bg-gray-50 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <p className="text-xl font-semibold text-gray-600">
                Total del Carrito:
              </p>
              <p className="text-2xl font-bold text-green-600">${totalCost}</p>
            </div>

            {/* Selector de método de pago */}
            <div className="mb-6">
              <label
                htmlFor="medioPago"
                className="text-gray-600 font-semibold"
              >
                Selecciona el método de pago:
              </label>
              <select
                id="medioPago"
                value={medioPago}
                onChange={(e) => setMedioPago(e.target.value)}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rojoPersonalizado"
              >
                <option value="Servipag">Servipag</option>
                <option value="Depósito Bancario">Depósito Bancario</option>
                <option value="Mercado Pago">Mercado Pago</option>
              </select>
            </div>

            <button
              onClick={handleOrdenarAhora}
              className="w-full bg-rojoPersonalizado text-white py-3 rounded-lg font-semibold shadow-md hover:bg-red-700 transition-all duration-300"
            >
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
