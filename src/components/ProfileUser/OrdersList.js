import React, { useState } from "react";
import { CalendarDate, CaretUp } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const OrdersList = () => {
  
  const [elementsVisible, setElementsVisible] = useState(true);

  const toggleElementsVisibility = () => {
    setElementsVisible(!elementsVisible);
  };
  const OrdersList = ["Orders", "Completed Orders"];
  return (
    <>
      <div className="OrdersMain">
        <div className="header">
          <div className="title">
            <CalendarDate size="18" />
            <p style={{ marginBottom: "0" }}>Orders</p>
          </div>
          <div className="btns">
            <span>
              <CaretUp size="20" onClick={toggleElementsVisibility} />
            </span>
          </div>
        </div>
        {elementsVisible && (
        <div className="items d-flex flex-column">
        
          <Link className="text-black" to="OrderItems">Orders</Link>
          <Link to="CompletedOrders">Completed Orders</Link>
        </div>)}
      </div>
    </>
  );
};

export default OrdersList;
