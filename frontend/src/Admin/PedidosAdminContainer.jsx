import React from "react";
import DashboardAside from "./DashboardAside";
import ListaAdminPedidos from "./Components/ListaAdminPedidos";

const PedidosAdminContainer = () => {
  return (
    <div className="flex w-full">
      <DashboardAside />
      <div className="flex flex-col flex-1 ">
        <ListaAdminPedidos />
      </div>
    </div>
  );
};

export default PedidosAdminContainer;
