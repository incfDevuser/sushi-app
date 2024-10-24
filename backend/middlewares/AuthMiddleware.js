import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

//Verificar primero si el usuario tiene un token
const authToken = async (req, res, next) => {
  try {
    const token = req.cookies.token_acceso;
    if (!token) {
      return res.status(403).json({
        message: "Este usuario no tiene un token",
      });
    }
    //Verificar el token
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: "Token no válido",
    });
  }
};
const isSuperAdmin = async (req, res, next) => {
  const usuario = req.user;
  if (!usuario || usuario.rol !== "super_admin") {
    return res.status(401).json({
      message: "Acceso denegado, solo Super Admin",
    });
  }
  next();
};

//Hacer los demas para los roles

export const AuthMiddleware = {
  authToken,
  isSuperAdmin,
};
