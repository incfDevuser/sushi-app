import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../../Components/LoadingPage";
import { useNavigate } from "react-router-dom";

const UsuarioContext = createContext();
const baseURL = import.meta.env.VITE_BASE_URL;

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);
  const [autenticando, setAutenticando] = useState(false);
  const [listaUsuarios, setListaUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerUsuario = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/usuarios/perfil`, {
          withCredentials: true,
        });
        console.log(response.data);
        setUsuario(response.data);
        setAutenticado(true);
        setRol(response.data.rol);
      } catch (error) {
        console.error("Error obteniendo el Usuario", error);
        setUsuario(null);
        setAutenticado(false);
        setRol("");
      } finally {
        setLoading(false);
      }
    };

    if (!autenticando) {
      obtenerUsuario();
    }
  }, [autenticando]);

  const listaDeUsuarios = async () => {
    try {
      const response = await axios.get(`${baseURL}/usuarios/`, {
        withCredentials: true,
      });
      console.log(response.data);
      setListaUsuarios(response.data.usuarios);
    } catch (error) {
      console.error("Error obteniendo la lista de usuarios:", error);
    }
  };
  const iniciarSesion = async (email, contraseña) => {
    setAutenticando(true);
    try {
      const response = await axios.post(
        `${baseURL}/usuarios/iniciarSesion`,
        { email, contraseña },
        { withCredentials: true }
      );
      console.log(response.data);
      setUsuario(response.data);
      setAutenticado(true);
      setRol(response.data.rol);
    } catch (error) {
      console.error("Error Iniciando Sesion", error);
      setUsuario(null);
      setAutenticado(false);
      setRol("");
    } finally {
      setAutenticando(false);
    }
  };

  const registrarse = async (nuevoUsuario) => {
    setAutenticando(true);
    try {
      const response = await axios.post(
        `${baseURL}/usuarios/registrarse`,
        nuevoUsuario,
        { withCredentials: true }
      );
      console.log(response.data);
      setUsuario(response.data);
      setAutenticado(true);
      setRol(response.data.rol);
    } catch (error) {
      console.error("Error Registrando al Usuario", error);
      setUsuario(null);
      setAutenticado(false);
      setRol("");
    } finally {
      setAutenticando(false);
    }
  };

  const cerrarSesion = async () => {
    try {
      await axios.post(
        `${baseURL}/usuarios/cerrarSesion`,
        {},
        { withCredentials: true }
      );
      setUsuario(null);
      setAutenticado(false);
      setRol("");
      //Rederigir al Cerrar Sesion
      navigate("/")
    } catch (error) {
      console.error("Error Cerrando Sesion", error);
    }
  };

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <UsuarioContext.Provider
      value={{
        usuario,
        autenticado,
        rol,
        listaUsuarios,
        listaDeUsuarios,
        iniciarSesion,
        registrarse,
        cerrarSesion,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
export const useUsuario = () => useContext(UsuarioContext);
