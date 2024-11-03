import React, { useEffect } from 'react';
import { useDespacho } from '../Context/DespachoContext';
import DespachoItem from './DespachoItem';

const ListaDespachos = () => {
  const { despachos, obtenerDespachos, loading } = useDespacho();

  useEffect(() => {
    obtenerDespachos();
  }, []);

  if (loading) {
    return <p>Cargando despachos...</p>;
  }

  return (
    <div className="p-6 w-full">
      <h2 className="text-2xl font-bold mb-4">Lista de Despachos</h2>
      {despachos.length > 0 ? (
        despachos.map((despacho) => (
          <DespachoItem key={despacho._id} despacho={despacho} />
        ))
      ) : (
        <p>No hay despachos disponibles.</p>
      )}
    </div>
  );
};

export default ListaDespachos;
