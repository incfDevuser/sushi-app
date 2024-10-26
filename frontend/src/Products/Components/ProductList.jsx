import React from "react";
import ProductItem from "./ProductItem";
import { useProduct } from "../Context/ProductContext";

const ProductList = () => {
  const { productos } = useProduct();

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h2 className="text-2xl mb-10">Explora Nuestro Menú</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos.map((producto) => (
          <ProductItem key={producto._id} producto={producto} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
