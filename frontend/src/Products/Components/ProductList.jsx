import React from "react";
import ProductItem from "./ProductItem";
import { useProduct } from "../Context/ProductContext";
import { useCarrito } from "../../Carrito/Context/CarritoContext";
import { toast } from "react-toastify";

const ProductList = () => {
  const { productos } = useProduct();
  const { agregarProductoAlCarrito } = useCarrito();

  const handleAgregar = async (productoId, cantidad) => {
    try {
      await agregarProductoAlCarrito(productoId, cantidad);
      toast.success("Producto agregado al carrito");
    } catch (error) {
      console.error(error);
      toast.error("Error al agregar producto al carrito");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-2">
      <h2 className="text-2xl mb-10">Explora Nuestro Menú</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productos.map((producto) => (
          <ProductItem
            key={producto._id}
            producto={producto}
            onAgregarAlCarrito={handleAgregar}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
