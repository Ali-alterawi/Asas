import React from "react";
import User from "./User";
import AddNewOrder from "./AddNewOrder";
import Orders from "./Orders";
import Settings from "./Settings";
const Sidebar = () => {
  return (
    <div className="Sidebar my-3">
      <User />
      <AddNewOrder />
      <Orders />
      <Settings />
    </div>
  );
};

export default Sidebar;
