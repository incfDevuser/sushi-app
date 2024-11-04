import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const PedidoContext = createContext();
const baseURL = import.meta.env.VITE_BASE_URL;

export const PedidoProvider = ({ children }) => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pedidosUser, setPedidosUser] = useState([]);

  const fetchPedidos = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/pedidos`, {
        withCredentials: true,
      });
      setPedidos(response.data.pedidos);
    } catch (error) {
      console.error("Error al cargar la lista de pedidos:", error);
    } finally {
      setLoading(false);
    }
  };
  // Obtener pedidos específicos de un usuario
  const fetchPedidosUsuario = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${baseURL}/pedidos/misPedidos`, {
        withCredentials: true,
      });
      setPedidosUser(response.data.pedidos);
    } catch (error) {
      console.error("Error al cargar los pedidos del usuario:", error);
    } finally {
      setLoading(false);
    }
  };

  // Crear un pedido
  const crearPedido = async (nuevoPedido) => {
    try {
      const response = await axios.post(
        `${baseURL}/pedidos/crearPedido`,
        nuevoPedido,
        {
          withCredentials: true,
        }
      );
      setPedidos((prevPedidos) => [...prevPedidos, response.data.pedido]);
      return response.data;
    } catch (error) {
      console.error("Error al crear el pedido:", error);
      throw error;
    }
  };

  //Eliminar un pedido
  const eliminarPedido = async (pedidoId) => {
    try {
      await axios.delete(`${baseURL}/pedidos/${pedidoId}`, {
        withCredentials: true,
      });
      setPedidos((prevPedidos) =>
        prevPedidos.filter((pedido) => pedido._id !== pedidoId)
      );
    } catch (error) {
      console.error("Error al eliminar el pedido:", error);
      throw error;
    }
  };

  //Cancelar un pedido
  const cancelarPedido = async (pedidoId) => {
    try {
      const response = await axios.patch(
        `${baseURL}/pedidos/pedido/cancelarPedido/${pedidoId}`,
        {},
        {
          withCredentials: true,
        }
      );
      setPedidos((prevPedidos) =>
        prevPedidos.map((pedido) =>
          pedido._id === pedidoId
            ? { ...pedido, estado_pedido: "Anulado" }
            : pedido
        )
      );
      return response.data.pedido;
    } catch (error) {
      console.error("Error al cancelar el pedido:", error);
      throw error;
    }
  };
  //Confirmar un Pedido
  const confirmarPedido = async (pedidoId) => {
    try {
      const response = await axios.patch(
        `${baseURL}/pedidos/pedido/confirmarPedido/${pedidoId}`,
        {},
        { withCredentials: true }
      );
      setPedidos((prevPedidos) =>
        prevPedidos.map((pedido) =>
          pedido._id === pedidoId
            ? { ...pedido, estado_pedido: "Confirmado" }
            : pedido
        )
      );
      return response.data;
    } catch (error) {
      console.error("Error al confirmar el pedido:", error);
      throw error;
    }
  };
  return (
    <PedidoContext.Provider
      value={{
        pedidos,
        pedidosUser,
        loading,
        fetchPedidos,
        fetchPedidosUsuario,
        crearPedido,
        eliminarPedido,
        cancelarPedido,
        confirmarPedido
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export const usePedido = () => useContext(PedidoContext);
