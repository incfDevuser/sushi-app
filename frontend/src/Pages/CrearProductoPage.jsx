import React from "react";
import CrearProducto from "../Products/Components/CrearProducto";

const CrearProductoPage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-16 bg-cover bg-center">
      <h1 className="text-2xl font-semibold mb-11">Crea Un Producto</h1>
      <CrearProducto />
    </div>
  );
};

export default CrearProductoPage;
