import React from "react";
import heroImage from "../assets/img/imagenSushi.jpg";
import japanImage from "../assets/img/japanLogo-removebg-preview.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly items-center w-full p-6">
      {/* Mensaje tipo slogan con un boton para ver el menu */}
      <div className="flex flex-col justify-center gap-4 text-center md:text-left">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <h1 className="font-thin text-2xl md:text-3xl">Lo mejor de Japón</h1>
          <img src={japanImage} alt="Japan Logo" className="w-10 h-8 md:w-[60px] md:h-[40px]" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rojoPersonalizado via-[#DD5038] to-[#FF7B43]">
          Fukusuke
        </h1>
        <div className="flex flex-col gap-4 items-center md:items-start">
          <p className="w-full md:w-[450px] text-gray-500 text-sm md:text-base px-4 md:px-0">
            Lo mejor de Japón, prueba nuestras preparaciones y deliciosos Sushis, trae a tu casa los sabores directos de Japón.
          </p>
          {/* Link hacia la página del menú */}
          <Link
            to="/menu"
            className="w-[130px] md:w-[150px] text-center p-3 bg-rojoPersonalizado text-white font-semibold rounded-xl border-b-4 border-red-700 hover:border-red-900 transition duration-300"
          >
            Quiero Pedir!
          </Link>
        </div>
      </div>
      {/* Imagen de sushi */}
      <img src={heroImage} alt="Hero Image" className="rounded-3xl mt-6 md:mt-0 w-full max-w-xs md:max-w-md" />
    </div>
  );
};

export default Hero;

