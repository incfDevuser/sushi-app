import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../../Components/LoadingPage";

const ProductContext = createContext();
const baseURL = import.meta.env.VITE_BASE_URL;

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const obtenerProductos = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/productos`);
        console.log(response.data);
        setProductos(response.data.productos);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
        setProductos([]);
      } finally {
        setLoading(false);
      }
    };
    obtenerProductos();
  }, []);
  const crearProducto = async (nuevoProducto) => {
    try {
      const formData = new FormData();
      formData.append("nombre", nuevoProducto.nombre);
      formData.append("descripcion", nuevoProducto.descripcion);
      formData.append("precio", nuevoProducto.precio);
      formData.append("disponible", nuevoProducto.disponible);
      if (nuevoProducto.imagen) {
        formData.append("imagen", nuevoProducto.imagen);
      }

      const response = await axios.post(
        `${baseURL}/productos/crearProducto`,
        formData,
        {
          withCredentials: true,
        }
      );
      setProductos((prevProductos) => [
        ...prevProductos,
        response.data.nuevoProducto,
      ]);
    } catch (error) {
      console.error("Error creando producto:", error);
    }
  };
  const eliminarProducto = async (productoId) => {
    try {
      await axios.delete(`${baseURL}/productos/${productoId}`);
      setProductos((prevProductos) =>
        prevProductos.filter((producto) => producto._id !== productoId)
      );
    } catch (error) {
      console.error("Error eliminando producto:", error);
    }
  };
  if (loading) {
    return (
      <div>
        <LoadingPage />
      </div>
    );
  }
  return (
    <ProductContext.Provider
      value={{ productos, crearProducto, eliminarProducto }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);
