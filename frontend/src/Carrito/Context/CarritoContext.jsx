import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../../Components/LoadingPage";

const CarritoContext = createContext();

const baseURL = import.meta.env.VITE_BASE_URL;

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCarrito = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/carrito`, {
          withCredentials: true,
        });
        if (response.data && response.data.carrito) {
          setCarrito(response.data.carrito);
        }
      } catch (error) {
        console.error("Error al cargar el carrito:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCarrito();
  }, []);
  const agregarProductoAlCarrito = async (productoId, cantidad) => {
    try {
      const response = await axios.post(
        `${baseURL}/carrito/agregar`,
        { productoId, cantidad },
        { withCredentials: true }
      );
      if (response.data && response.data.carrito) {
        setCarrito(response.data.carrito);
      }
    } catch (error) {
      console.error("Error al agregar producto al carrito:", error);
    }
  };
  const eliminarProductoDelCarrito = async (productoId) => {
    try {
      const response = await axios.delete(`${baseURL}/carrito/eliminar`, {
        data: { productoId },
        withCredentials: true,
      });
      if (response.data && response.data.carrito) {
        setCarrito(response.data.carrito);
      }
    } catch (error) {
      console.error("Error al eliminar producto del carrito:", error);
    }
  };
  const vaciarCarrito = async () => {
    try {
      const response = await axios.post(
        `${baseURL}/carrito/vaciar`,
        {},
        { withCredentials: true }
      );
      if (response.data && response.data.carrito) {
        setCarrito(response.data.carrito);
      }
    } catch (error) {
      console.error("Error al vaciar el carrito:", error);
    }
  };
  return (
    <CarritoContext.Provider
      value={{
        carrito,
        agregarProductoAlCarrito,
        eliminarProductoDelCarrito,
        vaciarCarrito,
        loading,
      }}
    >
      {loading ? <LoadingPage /> : children}
    </CarritoContext.Provider>
  );
};

export const useCarrito = () => useContext(CarritoContext);
