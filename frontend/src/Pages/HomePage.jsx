import React from "react";
import Hero from "../Components/Hero";
import Carrousel from "../Pedidos/Carrousel";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mt-28 bg-cover bg-center">
      <Hero />
      <div className="flex flex-col justify-center items-center mt-10 md:mt-28 px-4">
        <h1 className="font-semibold text-2xl md:text-3xl text-rojoPersonalizado">Los Más Vendidos</h1>
        <Carrousel />
      </div>
    </div>
  );
};

export default HomePage;
