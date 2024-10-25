import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import ProductPage from "./Pages/ProductPage";
import NosotrosPage from "./Pages/NosotrosPage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full cursor-pointer">
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            {/* Pagina principal */}
            <Route path="/" element={<HomePage />} />

            {/* Paginas de Autenticacion */}
            <Route path="/iniciarSesion" element={<LoginPage />} />
            <Route path="/registrarse" element={<RegisterPage />} />

            {/* Menu - Lista de Productos */}
            <Route path="/menu" element={<ProductPage />} />

            {/* Sobre Nosotros Page */}
            <Route path="/nosotros" element={<NosotrosPage />} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
