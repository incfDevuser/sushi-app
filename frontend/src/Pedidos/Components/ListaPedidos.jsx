import React from "react";
import PedidoItem from "./PedidoItem";

const ListaPedidos = ({ pedidos }) => {
  return (
    <div className="flex flex-col justify-center items-center mt-2 w-full max-w-4xl mx-auto p-4">
      {pedidos.length === 0 ? (
        <p className="text-gray-500 text-lg">No tienes pedidos</p>
      ) : (
        pedidos.map((pedido) => <PedidoItem key={pedido._id} pedido={pedido} />)
      )}
    </div>
  );
};

export default ListaPedidos;
