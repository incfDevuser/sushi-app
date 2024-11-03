import React, { useEffect } from "react";
import { usePedido } from "./Context/PedidoContext";
import ListaPedidos from "./Components/ListaPedidos";

const PedidosContainer = () => {
  const { pedidosUser, loading, fetchPedidosUsuario } = usePedido();

  useEffect(() => {
    fetchPedidosUsuario();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h2 className="text-2xl font-semibold mb-4">Mis Pedidos</h2>
      {loading ? (
        <p>Cargando pedidos...</p>
      ) : (
        <ListaPedidos pedidos={pedidosUser} />
      )}
    </div>
  );
};

export default PedidosContainer;
