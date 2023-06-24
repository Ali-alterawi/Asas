import React from "react";
import CompletedOrder from "./CompletedOrder";

const CompletedOrders = () => {
  return (
    <div className="Main Sidebar my-3 border rounded-4">
      <h2 className="p-3">Completed Orders</h2>
      <CompletedOrder/>
    </div>
  );
};

export default CompletedOrders;
