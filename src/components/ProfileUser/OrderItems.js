import React from "react";
import OrderItem from "./OrderItem";
import OrderDetails from "./OrderDetails";

const OrderItems = ({UserId}) => {
  return (
    <div className="Main Sidebar my-3 border rounded-4">
      <h2 className="p-3 ">Orders</h2>
      <OrderItem UserId={UserId}/>
    </div>
  );
};

export default OrderItems;
