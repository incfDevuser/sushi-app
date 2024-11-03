import React from 'react';

const DespachoItem = ({ despacho }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white mb-4">
      <h3 className="text-lg font-semibold text-gray-800">
        Pedido ID: {despacho.pedido._id}
      </h3>
      <p>
        <strong>Cliente:</strong> {despacho.pedido.cliente.nombre_completo}
      </p>
      <p>
        <strong>Dirección de Entrega:</strong> {despacho.direccion_entrega}
      </p>
      <p>
        <strong>Total Pedido:</strong> ${despacho.pedido.total_pedido}
      </p>
      <p>
        <strong>Estado de Entrega:</strong> {despacho.estado_entrega}
      </p>
    </div>
  );
};

export default DespachoItem;
