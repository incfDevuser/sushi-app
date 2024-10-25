import React from "react";
import ProductItem from "./ProductItem";
import { useProduct } from "../Context/ProductContext";

const ProductList = () => {
  const { productos } = useProduct();

  return (
    <div className="flex flex-col justify-center items-center mt-2 bg-cover bg-center">
        {productos.map((producto)=>(
            <ProductItem
                key={producto._id}
                producto={producto}
            />
        ))}
    </div>
  );
};

export default ProductList;
