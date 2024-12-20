import React, { useEffect } from "react";
import { useDespacho } from "../Context/DespachoContext";
import DespachoItem from "./DespachoItem";

const ListaDespachos = () => {
  const { despachos, obtenerDespachos, loading } = useDespacho();

  useEffect(() => {
    obtenerDespachos();
  }, []);

  if (loading) {
    return <p>Cargando despachos...</p>;
  }

  return (
    <div className="p-4 md:p-6 w-full">
      <h2 className="text-center text-2xl font-bold mb-6">Lista de Despachos</h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap gap-4">
        {despachos.length > 0 ? (
          despachos.map((despacho) => (
            <DespachoItem key={despacho._id} despacho={despacho} />
          ))
        ) : (
          <p>No hay despachos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default ListaDespachos;
