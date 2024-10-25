import React from "react";
import heroImage from "../assets/img/imagenSushi.jpg";
import japanImage from "../assets/img/japanLogo-removebg-preview.png";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex justify-evenly items-center w-full">
      {/* Mensaje tipo slogan con un boton para ver el menu */}
      <div className="flex flex-col justify-center gap-4">
        <div className="flex">
          <h1 className="font-thin text-3xl">Los mejor de Japon</h1>
          <img
            src={japanImage}
            alt="Japan Image"
            className="w-[60px] h-[40px]"
          />
        </div>
        <h1 class="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rojoPersonalizado via-[#DD5038] to-[#FF7B43]">
          Fukusuke
        </h1>
        <div className="flex flex-col gap-4">
          <p className="w-[450px] text-gray-500">
            Lo mejor de Japon, prueba nuestras preparaciones y deliciosos
            Sushis, trae a tu casa los sabores directo de Japon.
          </p>
          {/* Link hacia la pagina del menu */}
          <Link
            to="/menu"
            className="w-[150px] text-center p-3 bg-rojoPersonalizado text-white font-semibold rounded-xl border-b-4 border-red-700 hover:border-red-950 transition duration-300 ease-in-out transform"
          >
            Quiero Pedir!
          </Link>
        </div>
      </div>
      {/* Imagen de sushi */}
      <img src={heroImage} alt="Hero Image" className="rounded-3xl" />
    </div>
  );
};

export default Hero;
