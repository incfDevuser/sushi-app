import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UsuarioProvider } from "./Usuarios/Context/UsuarioContext.jsx";
import { CarritoProvider } from "./Carrito/Context/CarritoContext.jsx";
import { PedidoProvider } from "./Pedidos/Context/PedidoContext.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UsuarioProvider>
        <CarritoProvider>
          <PedidoProvider>
            <App />
          </PedidoProvider>
        </CarritoProvider>
      </UsuarioProvider>
    </BrowserRouter>
  </StrictMode>
);
