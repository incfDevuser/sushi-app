import React from "react";
import { AsideDashboard } from "../constants/NavbarData";
import { Link } from "react-router-dom";
import { FaUsers, FaClipboardList, FaTruck } from "react-icons/fa";

const DashboardAside = () => {
  const iconMap = {
    Usuarios: <FaUsers />,
    Pedidos: <FaClipboardList />,
    Despachos: <FaTruck />,
  };

  return (
    <aside className="w-60 h-screen p-6 bg-white border-r border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-8 text-center">
        Panel de Control
      </h2>
      <ul className="space-y-4">
        {AsideDashboard.map((item) => (
          <li key={item.id}>
            <Link
              to={item.path}
              className="flex items-center gap-3 px-4 py-3 font-medium rounded-lg hover:bg-gray-100 transition duration-200"
            >
              <span className="text-xl">{iconMap[item.label]}</span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default DashboardAside;
