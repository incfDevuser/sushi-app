import Usuario from "../models/usuarioSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

//Funcion para obtener todos los usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find({});
    return res.status(200).json({
      message: "Lista de usuarios",
      usuarios,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Funcion para registrarse
const registrarse = async (req, res) => {
  const {
    run,
    nombre_completo,
    direccion,
    comuna,
    ciudad,
    region,
    fecha_nacimiento,
    sexo,
    telefono,
    email,
    contraseña,
  } = req.body;
  if (
    !run ||
    !nombre_completo ||
    !direccion ||
    !comuna ||
    !ciudad ||
    !region ||
    !fecha_nacimiento ||
    !sexo ||
    !telefono ||
    !email ||
    !contraseña
  ) {
    return res.status(400).json({
      message: "Completa todos los campos porfavor",
    });
  }
  //Verificar si el usuario no exista en la base de datos
  const usuario = await Usuario.findOne({ email });
  if (usuario) {
    return res.status(400).json({
      message: "Este usuario ya existe, Inicia Sesion",
    });
  }
  //Ahora hashear la contrasena
  const hashedPassword = await bcrypt.hash(contraseña, 10);
  //Instanciar al nuevo usuario
  const nuevoUsuario = new Usuario({
    run,
    nombre_completo,
    direccion,
    comuna,
    ciudad,
    region,
    fecha_nacimiento,
    sexo,
    telefono,
    email,
    contraseña: hashedPassword,
  });
  try {
    //Guardar al nuevo usuario
    await nuevoUsuario.save();
    const payload = {
      _id: nuevoUsuario._id,
      nombre: nuevoUsuario.nombre_completo,
      email: nuevoUsuario.email,
      direccion:nuevoUsuario.direccion,
      rol: nuevoUsuario.rol,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const cookieOptions = {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: true,
    };
    res.cookie("token_acceso", token, cookieOptions);
    return res.status(201).json({
      message: "Usuario Registrado",
      nuevoUsuario,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Funcion para iniciar sesion
const iniciarSesion = async (req, res) => {
  const { email, contraseña } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(400).json({
        message: "Usuario no encontrado",
      });
    }
    if (!contraseña || !usuario.contraseña) {
      return res.status(400).json({
        message: "Credenciales incompletas",
      });
    }
    const compararContrasena = bcrypt.compareSync(
      contraseña,
      usuario.contraseña
    );
    if (!compararContrasena) {
      return res.status(401).json({
        message: "Contraseñas no coinciden",
      });
    }
    const payload = {
      _id: usuario._id,
      nombre: usuario.nombre_completo,
      email: usuario.email,
      direccion:usuario.direccion,
      rol: usuario.rol,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    const cookieOptions = {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    };
    res.cookie("token_acceso", token, cookieOptions);
    return res.status(200).json({
      message: "Inicio de sesión exitoso",
      usuario: payload,
    });
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
//Cerrar sesion
const cerrarSesion = async (req, res) => {
  res
    .clearCookie("token_acceso", {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    })
    .json({
      message: "Usuario deslogeado",
    });
};
//Eliminar usuario
const eliminarUsuarioId = async (req, res) => {
  const { id } = req.params;
  try {
    const usuarioEliminado = await Usuario.findByIdAndDelete(id);
    if (!usuarioEliminado) {
      return res.status(400).json({
        message: "Error al eliminar el Usuario",
      });
    }
    return res.status(200).json({
      message: "Usuario eliminado con exito",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
const perfilUsuario = async (req, res) => {
  const { email } = req.user;
  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({
        message: "No se encontro la sesion del usuario",
      });
    }
    return res.status(200).json(usuario);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Error interno del servidor",
    });
  }
};
export const UsuarioController = {
  registrarse,
  obtenerUsuarios,
  eliminarUsuarioId,
  iniciarSesion,
  cerrarSesion,
  perfilUsuario,
};
