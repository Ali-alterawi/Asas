import React from "react";
import User from "./User";
import AddNewOrder from "./AddNewOrder";
import OrdersList from "./OrdersList";
import Settings from "./Settings";
import Main from "../../components/ProfileUser/Main";
//
const Sidebar = () => {
  return (
      
        <div className="Sidebar my-3 border rounded-4">
          <User/>
          <AddNewOrder />
          <OrdersList />
          <Settings />
        </div>
  );
};

export default Sidebar;
