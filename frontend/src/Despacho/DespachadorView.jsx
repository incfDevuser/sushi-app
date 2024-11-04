import React, { useEffect } from 'react';
import { usePedido } from '../Pedidos/Context/PedidoContext';
import PedidoItem from '../Admin/Components/PedidoItem';

const DespachadorView = () => {
  const { pedidos, fetchPedidos } = usePedido();

  useEffect(()=>{
    fetchPedidos();
  }, [])

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lista de Pedidos</h2>
      {pedidos && pedidos.length > 0 ? (
        pedidos.map((pedido) => (
          <PedidoItem key={pedido._id} pedido={pedido} />
        ))
      ) : (
        <p className="text-gray-600">No hay pedidos disponibles.</p>
      )}
    </div>
  );
};

export default DespachadorView;
