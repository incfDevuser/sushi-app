import React, { useEffect } from 'react';
import PedidoItem from './PedidoItem';
import { usePedido } from '../../Pedidos/Context/PedidoContext';
import CardInfo from './CardInfo';

const ListaAdminPedidos = () => {
  const { pedidos, fetchPedidos, loading } = usePedido();

  useEffect(() => {
    fetchPedidos();
  }, []);

  // Contar los pedidos por estado
  const totalPendientes = pedidos.filter(pedido => pedido.estado_pedido === "Pendiente").length;
  const totalConfirmados = pedidos.filter(pedido => pedido.estado_pedido === "Confirmado").length;
  const totalCancelados = pedidos.filter(pedido => pedido.estado_pedido === "Anulado").length;

  if (loading) {
    return <p>Cargando pedidos...</p>;
  }

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Información de Pedidos</h2>
      
      {/* Mostrar tarjetas de información */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <CardInfo nombre="Pedidos Pendientes" cantidad={totalPendientes} fontColor={"blue"} />
        <CardInfo nombre="Pedidos Confirmados" cantidad={totalConfirmados} fontColor={"green"}/>
        <CardInfo nombre="Pedidos Cancelados" cantidad={totalCancelados}/>
      </div>

      {/* Mostrar lista de pedidos */}
      {pedidos.length > 0 ? (
        pedidos.map((pedido) => (
          <PedidoItem key={pedido._id} pedido={pedido} />
        ))
      ) : (
        <p>No hay pedidos disponibles.</p>
      )}
    </div>
  );
};

export default ListaAdminPedidos;

