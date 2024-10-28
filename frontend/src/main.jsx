import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UsuarioProvider } from "./Usuarios/Context/UsuarioContext.jsx";
import { CarritoProvider } from "./Carrito/Context/CarritoContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UsuarioProvider>
      <CarritoProvider>
        <App />
      </CarritoProvider>
    </UsuarioProvider>
  </StrictMode>
);
