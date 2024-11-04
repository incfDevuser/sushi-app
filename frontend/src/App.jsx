import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductPage from "./Pages/ProductPage";
import NosotrosPage from "./Pages/NosotrosPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

//Usuarios
import PerfilPage from "./Pages/PerfilPage";
import CarritoContainer from "./Carrito/CarritoContainer";
import PedidosContainer from "./Pedidos/PedidosContainer";
//Usuario Admin
import DashboardPage from "./Pages/DashboardPage";
//Contextos
import { ProductProvider } from "./Products/Context/ProductContext";
import { DespachoProvider } from "./Despacho/Context/DespachoContext";
//Producto
import CrearProductoPage from "./Pages/CrearProductoPage";
//Rutas para ADMIN DASHBOARD
import UsuariosContainer from "./Usuarios/UsuariosContainer";
import PedidosAdminContainer from "./Admin/PedidosAdminContainer";
import DespachoContainer from "./Despacho/DespachoContainer";

//Rutas para el despachador
import DespachadorView from "./Despacho/DespachadorView";
import DespachadorEnvio from "./Despacho/Context/DespachadorEnvio";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full cursor-pointer">
      <Header />
      <Navbar />
      <div className="flex-grow">
        <Routes>
          {/* Pagina principal */}
          <Route path="/" element={<HomePage />} />

          {/* Paginas de Autenticacion */}
          <Route path="/iniciarSesion" element={<LoginPage />} />
          <Route path="/registrarse" element={<RegisterPage />} />

          {/* Menu - Lista de Productos */}
          <Route
            path="/menu"
            element={
              <ProductProvider>
                <ProductPage />
              </ProductProvider>
            }
          />

          {/* Sobre Nosotros Page */}
          <Route path="/nosotros" element={<NosotrosPage />} />

          {/* Ruta de Usuario */}
          <Route path="/perfil" element={<PerfilPage />} />
          <Route path="/carrito" element={<CarritoContainer />} />
          <Route path="/pedidos" element={<PedidosContainer />} />

          {/* Ruta Usuario "Super Admin" - Dashboard */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route
            path="/listaPedidos"
            element={
              <DespachoProvider>
                <PedidosAdminContainer />
              </DespachoProvider>
            }
          />

          {/* Crear producto page */}
          <Route
            path="/crearProducto"
            element={
              <ProductProvider>
                <CrearProductoPage />
              </ProductProvider>
            }
          />

          {/* Rutas ADMIN ASIDE */}
          <Route path="/usuarios" element={<UsuariosContainer />} />
          {/* Despachos Para el Admin */}
          <Route
            path="/despachos"
            element={
              <DespachoProvider>
                <DespachoContainer />
              </DespachoProvider>
            }
          />
          {/* Despachos para el "Despachador" */}
          <Route
            path="/despachadorView"
            element={
              <DespachoProvider>
                <DespachadorView />
              </DespachoProvider>
            }
          />
          <Route
            path="/envios"
            element={
              <DespachoProvider>
                <DespachadorEnvio />
              </DespachoProvider>
            }
          />
        </Routes>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
