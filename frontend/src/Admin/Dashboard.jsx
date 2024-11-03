import React from "react";
import DashboardAside from "./DashboardAside";
import { FaSmile } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex w-full h-screen">
      <DashboardAside />
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        {/* Tarjeta de Saludo */}
        <div className="w-full max-w-3xl bg-white shadow-2xl rounded-2xl p-10 transform transition duration-300 hover:scale-105">
          <div className="flex justify-center mb-4">
            <FaSmile className="text-yellow-500 text-5xl" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Bienvenido a tu Dashboard
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Aquí podrás administrar la información de tu negocio, revisar
            estadísticas, gestionar pedidos y mucho más.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
