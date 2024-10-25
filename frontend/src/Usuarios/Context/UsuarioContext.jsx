import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import LoadingPage from "../../Components/LoadingPage";
const UsuarioContext = createContext();

const baseURL = import.meta.env.VITE_BASE_URL;

export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null);
  const [rol, setRol] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [loading, setLoading] = useState(true);
  const [autenticando, setAutenticando] = useState(false);

  useEffect(() => {
    const usuario = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${baseURL}/usuarios/perfil`, {
          withCredentials: true,
        });
        //Verificar que informacion nos trae devuelta
        console.log(response.data);
        //Insertar el usuario
        setUsuario(response.data);
        //Validar que el usuario esta autenticado
        setAutenticado(true);
        //Ingresar el rol del usuario autenticado
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
      usuario();
    }
  }, [autenticando]);

  const iniciarSesion = async (email, contraseña) => {
    setAutenticando(true);
    try {
      const response = await axios.post(
        `${baseURL}/usuarios/iniciarSesion`,
        { email, contraseña },
        { withCredentials: true }
      );
      console.log(response.data);
      //Insertar al usuario autenticado
      setUsuario(response.data);
      //Validar al usuario esta autenticado
      setAutenticado(true);
      //Ingresar el rol del usuario autenticado
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
        { nuevoUsuario },
        { withCredentials: true }
      );
      console.log(response.data);
      //Insertar al usuario autenticado
      setUsuario(response.data);
      //Validar al usuario esta autenticado
      setAutenticado(true);
      //Ingresar el rol del usuario autenticado
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
      //Ingresar el rol del usuario autenticado
      setRol("");
    } catch (error) {
      console.error("Error Cerrando Sesion", error);
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
    <UsuarioContext.Provider
      value={{
        usuario,
        autenticado,
        rol,
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
