import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DespachoContext = createContext();
const baseURL = import.meta.env.VITE_BASE_URL;

export const DespachoProvider = ({ children }) => {
  const [despachos, setDespachos] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const obtenerDespachos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/despachos/`, {
        withCredentials: true,
      });
      setDespachos(response.data.despachos);
    } catch (error) {
      console.error("Error al obtener los despachos:", error);
    } finally {
      setLoading(false);
    }
  };
  const generarDespacho = async (nuevoDespacho) => {
    try {
      const response = await axios.post(
        `${baseURL}/despachos/crearDespacho`,
        nuevoDespacho,
        { withCredentials: true }
      );
      setDespachos((prevDespachos) => [
        ...prevDespachos,
        response.data.despacho,
      ]);
      return response.data.despacho;
    } catch (error) {
      console.error("Error al crear el despacho:", error);
      throw error;
    }
  };
  const eliminarDespacho = async (despachoId) => {
    try {
      await axios.delete(`${baseURL}/despachos/despacho/${despachoId}`, {
        withCredentials: true,
      });
      setDespachos((prevDespachos) =>
        prevDespachos.filter((despacho) => despacho._id !== despachoId)
      );
    } catch (error) {
      console.error("Error al eliminar el despacho:", error);
      throw error;
    }
  };
  return (
    <DespachoContext.Provider
      value={{
        despachos,
        loading,
        obtenerDespachos,
        generarDespacho,
        eliminarDespacho,
      }}
    >
      {children}
    </DespachoContext.Provider>
  );
};
export const useDespacho = () => useContext(DespachoContext);
