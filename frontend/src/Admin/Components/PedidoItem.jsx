import React from 'react';

const PedidoItem = ({ pedido }) => {
  const fechaPedido = new Date(pedido.fecha_pedido).toLocaleDateString();

  return (
    <div className="border p-6 rounded-lg shadow-md bg-white mb-4">
      {/* Encabezado del Pedido */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Pedido #{pedido._id}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-bold ${pedido.estado_pedido === "Pendiente" ? "bg-yellow-200 text-yellow-800" : "bg-green-200 text-green-800"}`}>
          {pedido.estado_pedido}
        </span>
      </div>
      
      {/* Información del cliente */}
      <div className="text-gray-700 space-y-2 mb-4">
        <p><strong>Cliente:</strong> {pedido.cliente.nombre_completo}</p>
        <p><strong>Dirección:</strong> {pedido.cliente.direccion}, {pedido.cliente.comuna}, {pedido.cliente.ciudad}, {pedido.cliente.region}</p>
        <p><strong>Email:</strong> {pedido.cliente.email}</p>
        <p><strong>Teléfono:</strong> {pedido.cliente.telefono}</p>
      </div>

      {/* Detalles del Pedido */}
      <div className="text-gray-600 space-y-2">
        <p><strong>Fecha del Pedido:</strong> {fechaPedido}</p>
        <p><strong>Total:</strong> ${pedido.total_pedido.toFixed(2)}</p>
        <p><strong>Método de Pago:</strong> {pedido.medio_pago}</p>
        {pedido.descuento > 0 && (
          <p><strong>Descuento Aplicado:</strong> ${pedido.descuento.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default PedidoItem;
