  import React from "react";
  import PedidoItem from "./PedidoItem";

  const ListaPedidos = ({ pedidos }) => {
    return (
      <div className="flex flex-col justify-center items-center mt-2">
        {pedidos.length === 0 ? (
          <p>No tienes pedidos</p>
        ) : (
          pedidos.map((pedido) => <PedidoItem key={pedido._id} pedido={pedido} />)
        )}
      </div>
    );
  };

  export default ListaPedidos;
