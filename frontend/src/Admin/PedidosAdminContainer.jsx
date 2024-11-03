import React from "react";
import DashboardAside from "./DashboardAside";
import ListaAdminPedidos from "./Components/ListaAdminPedidos";

const PedidosAdminContainer = () => {
  return (
    <div className="flex w-full">
      <DashboardAside />
      <div className="flex flex-col flex-1 p-6">
        <ListaAdminPedidos />
      </div>
    </div>
  );
};

export default PedidosAdminContainer;
