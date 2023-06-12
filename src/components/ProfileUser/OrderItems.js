import React from "react";
import OrderItem from "./OrderItem";
import OrderDetails from "./OrderDetails";

const OrderItems = () => {
  return (
    <div>
      <h2 className="p-3">Orders</h2>
      <OrderItem />
      <OrderItem />
      <OrderDetails />
    </div>
  );
};

export default OrderItems;
